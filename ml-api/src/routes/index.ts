/* eslint-disable global-require */
import fs from 'fs';
import path from 'path';

export default async (router: any) => {
  const apiRoutesPath = path.resolve(__dirname, 'api');
  const files = await fs.promises.readdir(apiRoutesPath);

  files.forEach((fileName) => {
    // eslint-disable-next-line import/no-dynamic-require
    const route = require(path.resolve(apiRoutesPath, fileName));

    route(router);
  });
};
