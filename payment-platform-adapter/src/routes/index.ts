import Router from 'koa-router';
import * as miscController from '../controllers/misc';
const router = new Router();

router.get('/', miscController.healthcheck);
router.get('/health', miscController.healthcheck);
// Change this to your liking
router.post('/execute', miscController.monitorTransaction);
router.post('/transfers', miscController.transfer);

export default router;
