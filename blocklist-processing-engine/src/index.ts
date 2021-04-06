import express from 'express';
import { config } from './config';
import { ApplicationService } from './services/application.service';

export const app = express();
export const appService = new ApplicationService();

app.use(express.json());

app.get('/*', (req, res) => appService.getOnline(res));

app.post('/execute', (req, res) =>
  appService.executeBlockListRule(req, res),
);

app.post('/debug', (req, res) =>
  appService.executeBlockListRule(req, res, true),
);


app.listen(3000, () => {
  console.log(
    `Block List Processing Engine - Listening on: http://localhost:${3000}`,
  );
});

appService.initialize();