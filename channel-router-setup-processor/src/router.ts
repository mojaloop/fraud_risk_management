import Router from 'koa-router';
import { healthCheck } from './controllers/healthcheck';

const router = new Router();

// health checks
router.get('/health', healthCheck);

export default router;
