import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import { config } from './config';
import { ApplicationService } from './services/application.service';

export const appService: ApplicationService = new ApplicationService();
export const app = new Koa();


const router = new Router();

router.get(/.*/gmi, async (ctx) => {
    await appService.getOnline(ctx);
});

router.post('/execute', async (ctx) => {
    await appService.execute(ctx);
});

app.use(bodyParser());
app.use(router.routes());
app.listen(config.hostPort);
