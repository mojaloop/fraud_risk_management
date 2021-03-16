import express from 'express';
import { config } from './config';
import { ApplicationService } from './services/application.service';

export const app = express();
export const appService = new ApplicationService();

app.use(express.json());

app.get('/*', (req, res) => appService.getOnline(res));

app.post('/execute', (req, res) =>
  appService.executePredicateRequest(req, res),
);

app.post('/debug', (req, res) =>
  appService.executePredicateRequest(req, res, true),
);


app.listen(config.hostPort, () => {
  console.log(
    `Predicate Builder Service - Listening on: http://localhost:${config.hostPort}`,
  );
});
