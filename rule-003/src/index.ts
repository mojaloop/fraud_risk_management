import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import { ApplicationService } from './services/application.service';
import { LoggerService } from './services/logger.service';

export const appService: ApplicationService = new ApplicationService();
export const app = new Koa();

const router = new Router();

router.get('/', async (ctx) => {
  await appService.main(ctx);
});

router.post('/execute', async (ctx) => {
  await appService.execute(ctx);
});

router.get('/online', async (ctx) => appService.getOnline(ctx));

app.use(bodyParser());
app.use(router.routes());

app.listen(3000, () => {
  LoggerService.log('Rule-003 ✅ - Listening on: http://localhost:3000');
});
