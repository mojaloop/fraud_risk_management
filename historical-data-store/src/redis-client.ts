import { RedisClient } from 'redis';
import csv from 'csvtojson';
import { ShareDirectoryClient, ShareServiceClient, StorageSharedKeyCredential } from '@azure/storage-file-share';
import { HistoricalDataType, AzureType } from './constants';
import { createDirectory, listFiles } from './azure-client';
import { log } from './helper';

// A helper method used to read a Node.js readable stream into a Buffer
async function streamToBuffer(readableStream: NodeJS.ReadableStream): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    readableStream.on('data', (data: Buffer | string) => {
      chunks.push(data instanceof Buffer ? data : Buffer.from(data));
    });
    readableStream.on('end', () => {
      resolve(Buffer.concat(chunks));
    });
    readableStream.on('error', reject);
  });
}

/**
 * Clears Redis, then loads sample data from file, then publishes all to Redis.
 */
const initializeRedis = async (
  redisHost: string,
  redisPort: number,
  redisDB: number,
  redisAuth: string,
  logTopic: string,
): Promise<RedisClient> => {
  const client: RedisClient = new RedisClient({
    db: redisDB,
    host: redisHost,
    port: redisPort,
    auth_pass: redisAuth
  });
  client.on('error', (error) => {
    log(error, logTopic);
  });
  return client;
};

const insertHistoricalData = async (client: RedisClient, transfers) => {
  const ILPS = transfers.reduce((ILPAccumulator, transfer) => {
    const ILPNames: string[] = Object.keys(ILPAccumulator);
    if (ILPNames.includes(transfer.ILPSourceAccountAddress)) {
      ILPAccumulator[transfer.ILPSourceAccountAddress].push(transfer);
    } else {
      // eslint-disable-next-line no-param-reassign
      ILPAccumulator[transfer.ILPSourceAccountAddress] = [transfer];
    }
    return ILPAccumulator;
  }, {});
  const names = Object.keys(ILPS);
  names.forEach((ILP) => {
    client.set(ILP, JSON.stringify(ILPS[ILP]));
  });
};

const insertFilesNames = async (client: RedisClient, data: string[]) => {
  data.forEach((name) => {
    if (name === data[0]) {
      client.append('files-names', name);
    } else {
      client.append('files-names', `,${name}`);
    }
  });
};

const getFilesNames = async (
  client: RedisClient,
  topic: string,
): Promise<any> => new Promise((resolve) => {
  client.get('files-names', (err, data) => {
    if (err) {
      log(`Error while retrieving file names: ${err}`, topic);
      resolve(0);
    }
    resolve(data);
  });
});

const logAllkeys = async (client: RedisClient, topic: string) => client.keys('*', (err) => {
  if (err) {
    log(err, topic);
  } else {
    log('Historical data has being stored.', topic);
  }
});

const findNewFileName = (
  azureFilesNames: string[],
  redisFilesnames: string[] | null,
): string | null => {
  if (azureFilesNames && azureFilesNames.constructor !== Array) {
    return null;
  }
  if (redisFilesnames && redisFilesnames.constructor !== Array) {
    return azureFilesNames[0];
  }
  const newFileName = azureFilesNames.filter((azureFileName) => !redisFilesnames
    ?.includes(azureFileName));
  return newFileName[0];
};

const cleanStore = async (client: RedisClient): Promise<any> => new Promise((resolve) => {
  client.flushdb(((err) => {
    if (err) {
      resolve(0);
    }
    resolve(0);
  }));
});

const processNewData = async (
  historicDataFile: string,
  client: RedisClient,
  azureFileNames: string[],
  directoryClient: ShareDirectoryClient,
  topic: string,
) => {
  log(`found new file: ${historicDataFile}`, topic);
  await cleanStore(client);
  await insertFilesNames(client, azureFileNames);
  const fileClient = directoryClient.getFileClient(historicDataFile!);
  const downloadFileResponse = await fileClient.download(0);
  const historicalFileBuffer = await streamToBuffer(downloadFileResponse.readableStreamBody!);
  return csv().fromString(historicalFileBuffer.toString());
};

/**
 * Load all data from the file to Redis
 */
const loadData = async (
  client: RedisClient,
  loadFromLocal: boolean,
  azureConfig: AzureType,
  topic: string,
): Promise<HistoricalDataType[] | boolean> => {
  if (loadFromLocal) {
    return csv().fromFile('./src/data/historical-data-1607569708.csv');
  }
  const {
    azureAccount,
    azureKey,
    azureShare,
    azureDirectory,
  } = azureConfig;
  const sharedKeyCredential = new StorageSharedKeyCredential(azureAccount, azureKey);
  const serviceClient = new ShareServiceClient(
    `https://${azureAccount}.file.core.windows.net`,
    sharedKeyCredential,
  );
  const directoryClient = await createDirectory(serviceClient, azureShare, azureDirectory, topic);
  const azureFileNames = await listFiles(directoryClient);
  const redisFileNames = await getFilesNames(client, topic);
  const historicDataFile = redisFileNames
    ? findNewFileName(azureFileNames, redisFileNames.split(','))
    : azureFileNames[azureFileNames.length - 1]; // grab the last file uploaded
  if (historicDataFile) {
    return processNewData(historicDataFile, client, azureFileNames, directoryClient, topic);
  }
  return false;
};

export {
  initializeRedis,
  loadData,
  insertHistoricalData,
  logAllkeys,
};
