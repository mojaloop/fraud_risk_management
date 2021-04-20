import Router from 'koa-router';
import * as miscController from './controllers/misc';
import * as channelProcessorController from './controllers/channelProcessor';
const router = new Router();

router.get('/', miscController.healthcheck);
router.get('/health', miscController.healthcheck);
router.post('/result-test', channelProcessorController.testResult);
router.post('/typology-scoring', channelProcessorController.scoreTypologies);

export default router;
