import Router from 'koa-router';
import * as miscController from './controllers/misc';

const router = new Router();

router.get('/health', miscController.healthcheck);

router.post('/monitor/transaction', miscController.monitorTransaction);

export default router;
