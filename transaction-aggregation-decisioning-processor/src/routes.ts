import Router from 'koa-router';
import * as miscController from './controllers/misc';
import * as evaluatorController from './controllers/evaluation';
const router = new Router();

router.get('/', miscController.healthcheck);
router.get('/health', miscController.healthcheck);
router.post('/execute', evaluatorController.scoreTransaction);
router.post('/result-test', evaluatorController.testResult);

export default router;
