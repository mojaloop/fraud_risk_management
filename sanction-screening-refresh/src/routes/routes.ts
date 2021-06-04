import Router from 'koa-router';
import * as miscController from '../controllers/misc';
const router = new Router();

router.get('/', miscController.healthcheck);
router.get('/health', miscController.healthcheck);

export default router;
