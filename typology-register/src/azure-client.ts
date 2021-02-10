import {
  ShareServiceClient,
  ShareDirectoryClient,
} from '@azure/storage-file-share';
import { log } from './helper';

const createDirectory = async (
  serviceClient: ShareServiceClient,
  azureShare: string,
  azureDirectory: string,
  topic: string,
): Promise<ShareDirectoryClient> => {
  const shareClient = serviceClient.getShareClient(azureShare);
  const directoryClient = shareClient.getDirectoryClient(azureDirectory);
  try {
    await directoryClient.create();
    log(`Share ${azureShare} create succesfully`, topic);
  } catch (e) {
    if (!e.details.message.includes('The specified resource already exists')) {
      log(e.details.message, topic);
    }
  }
  return directoryClient;
};

const listFiles = async (
  directoryClient: ShareDirectoryClient,
): Promise<string[]> => {
  const fileNames: string[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for await (const entity of directoryClient.listFilesAndDirectories()) {
    if (entity.name.includes('typology')) {
      fileNames.push(entity.name);
    }
  }
  return fileNames;
};

export { createDirectory, listFiles };
