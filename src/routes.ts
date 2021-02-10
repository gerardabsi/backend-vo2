import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import apiSpec from '../openapi.json';

import * as TransactionController from './controllers/transaction';

const router = Router();

// transaction routes
router.post('/transaction', TransactionController.add);
router.get('/transaction', TransactionController.search);
router.put('/transaction/:id', TransactionController.update);
router.delete('/transaction/:id', TransactionController.deleteTransaction);

// Dev routes
if (process.env.NODE_ENV === 'development') {
  router.use('/dev/api-docs', swaggerUi.serve);
  router.get('/dev/api-docs', swaggerUi.setup(apiSpec));
}

export default router;
