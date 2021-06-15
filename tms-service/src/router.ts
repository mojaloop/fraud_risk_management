import Router from 'koa-router';
import { healthCheck } from './controllers/healthcheck';
import { monitorTransaction } from './controllers/execute';

const router = new Router();

// health checks
router.get('/', healthCheck);
router.get('/health', healthCheck);

// execute the service
router.post('/execute', monitorTransaction);

export default router;
