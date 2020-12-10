import { ShareServiceClient, ShareDirectoryClient } from '@azure/storage-file-share';
import { stringify } from 'querystring';

const createDirectory = async (
  serviceClient: ShareServiceClient,
  azureShare: string,
  azureDirectory: string,
): Promise<ShareDirectoryClient> => {
  const shareClient = serviceClient.getShareClient(azureShare);
  const directoryClient = shareClient.getDirectoryClient(azureDirectory);
  try {
    await directoryClient.create();
    console.log(`Share ${azureShare} create succesfully`);
  } catch (e) {
    if (!e.details.message.includes('The specified resource already exists')) {
      console.log(e.details.message);
    }
  }
  return directoryClient;
};

const createFile = async (directoryClient: ShareDirectoryClient) => {
  const content = 'Hello World!你好';
  // Get its length in bytes.
  const contentByteLength = Buffer.byteLength(content);
  const fileName = `newfile ${new Date().getTime()}`;
  const fileClient = directoryClient.getFileClient(fileName);
  try {
    await fileClient.create(contentByteLength);
    console.log(`Create file ${fileName} successfully`);
  } catch (e) {
    console.log(e);
  }
};

const listFiles = async (directoryClient: ShareDirectoryClient): Promise<string[]> => {
  const fileNames: string[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for await (const entity of directoryClient.listFilesAndDirectories()) {
    if (entity.name.includes('historical-data-')) {
      fileNames.push(entity.name);
    }
  }
  return fileNames;
};

export { createDirectory, listFiles, createFile };
