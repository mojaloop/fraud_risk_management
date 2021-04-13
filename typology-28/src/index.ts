import { config } from './config/config';
import { initializeLoggingProducer } from './helper';
import { initializeProducer } from './producer';
import express from 'express';
import { ApplicationService } from './services/application.service';

export const app = express();
export const appService = new ApplicationService();

const initialize = async () => {
  try {
    await initializeLoggingProducer();
    await initializeProducer();
  } catch (e) {
    console.error(e);
  }
};

initialize();

app.use(express.json());

app.get('/online', (req, res) => appService.getOnline(res));

app.post('/execute', async (req, res) =>
  await appService.executeRequest(req, res),
);

app.post('/debug', async (req, res) =>
  await appService.executeRequest(req, res, true),
);


app.listen(config.hostPort, () => {
  console.log(
    `Typology 28 - Listening on: http://localhost:${config.hostPort}`,
  );
});

export default app;