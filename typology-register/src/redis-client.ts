import fs from 'fs';
import { RedisClient } from 'redis';
import csv from 'csvtojson';
import { ShareDirectoryClient, ShareServiceClient, StorageSharedKeyCredential } from '@azure/storage-file-share';
import { AzureType } from './constants';
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
    auth_pass: redisAuth,
  });
  client.on('error', (error) => {
    log(error, logTopic);
  });
  return client;
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
  typologyFile: string,
  client: RedisClient,
  azureFileNames: string[],
  directoryClient: ShareDirectoryClient,
  topic: string,
) => {
  log(`inserting file: ${typologyFile}`, topic);
  const fileClient = directoryClient.getFileClient(typologyFile!);
  const downloadFileResponse = await fileClient.download(0);
  const typologyBuffer = await streamToBuffer(downloadFileResponse.readableStreamBody!);
  const typology = typologyBuffer.toString();
  client.append(typologyFile, typology);
};

const loadLocalFiles = (topic) => {
  fs.readdir('./src/data', (err, files) => {
    if (err) {
      log(`error loading local data: ${err}`, topic);
    } else {
      files.forEach((file) => {
        csv().fromFile(file);
      });
    }
  });
  return true;
};

/**
 * Load all data from the file to Redis
 */
const loadData = async (
  client: RedisClient,
  loadFromLocal: boolean,
  azureConfig: AzureType,
  topic: string,
): Promise<any> => {
  if (loadFromLocal) {
    return loadLocalFiles(topic);
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
  await cleanStore(client);
  return azureFileNames.map(fileName => processNewData(fileName, client, azureFileNames, directoryClient, topic))
};

export {
  initializeRedis,
  loadData,
};
