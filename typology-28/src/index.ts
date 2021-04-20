import express from 'express';
import { ApplicationService } from './services/application.service';

export const app = express();
export const appService = new ApplicationService();

app.use(express.json());

app.get('/online', (req, res) => appService.getOnline(res));

app.post('/execute', async (req, res) =>
  await appService.executeRequest(req, res),
);

app.listen(3000, () => {
  console.log(
    `Typology 28 - Listening on: http://localhost:3000`,
  );
});

export default app;