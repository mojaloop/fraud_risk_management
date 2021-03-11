import express from 'express';
import { ApplicationService } from './services/application.service';

export const app = express();

export const appService = new ApplicationService();

app.use(express.json());

app.get('/*', (req, res) => appService.getOnline(req, res));

app.post('/execute', (req, res) =>
  appService.executePredicateRequest(req, res),
);

app.post('/debug', (req, res) =>
  appService.executePredicateRequest(req, res, true),
);

const port = 3000;

app.listen(port, () => {
  console.log(
    `Predicate Builder Service - Listening on: http://localhost:${port}`,
  );
});
