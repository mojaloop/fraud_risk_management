import express from 'express';
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


app.listen(3000, () => {
  console.log(
    `Predicate Builder Service - Listening on: http://localhost:${3000}`,
  );
});
