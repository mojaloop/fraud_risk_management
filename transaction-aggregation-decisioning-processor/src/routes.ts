import Router from 'koa-router';
import {
  handleHealthCheck,
  handleScoring,
  handleTestRequest,
} from './controllers';

const router = new Router();

router.get('/', handleHealthCheck);
router.get('/health', handleHealthCheck);
router.post('/execute', handleScoring);
router.post('/result-test', handleTestRequest);

export default router;
