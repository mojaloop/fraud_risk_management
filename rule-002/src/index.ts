import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import { ApplicationService } from './services/application.service';

export const appService: ApplicationService = new ApplicationService();
export const app = new Koa();

const router = new Router();

router.get('/', async (ctx) => {
  await appService.main(ctx);
});

router.post('/', async (ctx) => {
  await appService.call(ctx);
});

router.get('/online', async (ctx) => {
  await appService.getOnline(ctx);
});

app.use(bodyParser());
app.use(router.routes());
app.listen(3000);
