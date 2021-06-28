import Router from 'koa-router';
import { healthCheck } from './controllers/healthcheck';
import { monitorQuote, monitorTransfer } from './controllers/execute';

const router = new Router();

// health checks
router.get('/', healthCheck);
router.get('/health', healthCheck);

// execute the service
router.post('/execute', monitorQuote);
router.post('/transfer', monitorTransfer);

export default router;
