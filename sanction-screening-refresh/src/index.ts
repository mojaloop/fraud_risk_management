/* eslint-disable no-console */
import { configuration } from './config';
import apm from 'elastic-apm-node';
import { get } from 'https';
import { LoggerService } from './helpers';
import { Welcome8 } from './models/xml.types';
import { parseString } from 'xml2js';
import { uploadSanctionData } from './services/upload-sanction-data.service';
import schedule from 'node-schedule';
import { Context } from 'koa';
import App from './app';

if (configuration.apmLogging) {
  apm.start({
    serviceName: configuration.apmServiceName,
    secretToken: configuration.apmSecretToken,
    serverUrl: configuration.apmURL,
  });
}
const app = new App();

export function handleError(err: Error, ctx: Context): void {
  if (ctx == null) {
    console.error({ err, event: 'error' }, 'Unhandled exception occured');
  }
}

export function terminate(signal: NodeJS.Signals): void {
  try {
    app.terminate();
  } finally {
    console.info({ signal, event: 'terminate' }, 'App is terminated');
    process.kill(process.pid, signal);
  }
}

// Handle uncaught errors
app.on('error', handleError);

// Start server
if (Object.values(require.cache).filter(async (m) => m?.children.includes(module))) {
  const server = app.listen(3000, () => {
    console.info({ event: 'execute' }, 'API server listening on PORT 3000');
  });
  server.on('error', handleError);

  const errors = ['unhandledRejection', 'uncaughtException'];
  errors.forEach((error) => {
    process.on(error, handleError);
  });

  const signals: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];

  signals.forEach((signal) => {
    process.once(signal, () => terminate(signal));
  });
}

async function init() {
  const xml = (await executePost()).toString();
  const parsed = await parseXml(xml);
  const sanctionList: Welcome8 = parsed as Welcome8;
  await uploadSanctionData(sanctionList);
}

async function parseXml(xml: string): Promise<Welcome8 | Error> {
  return new Promise((resolve) => {
    parseString(xml, (err, result) => {
      if (err) resolve(err);
      resolve(result);
    });
  });
}

async function executePost(): Promise<string | Error> {
  return new Promise((resolve) => {
    let xml = '';
    let dataBlocks = 0;
    get('https://scsanctions.un.org/resources/xml/en/consolidated.xml', {}, (res) => {
      // console.log(res);

      if (res.statusCode !== 200) {
        LoggerService.log('StatusCode != 200');
      }

      res.on('error', (d) => {
        LoggerService.error(`Error received while downloading Sanction List with message: ${d}`);
        resolve(d);
      });

      res.on('data', (d) => {
        xml += d.toString();
        dataBlocks++;
      });

      res.on('end', () => {
        resolve(xml);
      });
    });
  });
}

const job = schedule.scheduleJob(configuration.schedule, function () {
  init();
});

export default app;
