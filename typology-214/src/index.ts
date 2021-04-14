import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import { ApplicationService } from './services/application.service';

export const appService: ApplicationService = new ApplicationService();
export const app = new Koa();


const router = new Router();

router.get(/.*/gmi, async (ctx) => {
    await appService.getOnline(ctx);
});

router.post('/execute', async (ctx) => {

    //TODO make sure what is ment by  
    /*
    registered with the Channel Routing Setup processor to be invoked when 
    the transaction’s value for Payer.PartyIDType = “INDIVIDUAL_ID”
     */
    await appService.execute(ctx);
});

app.use(bodyParser());
app.use(router.routes());
app.listen(3000);
