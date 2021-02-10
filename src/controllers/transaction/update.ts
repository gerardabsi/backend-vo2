import { RequestHandler } from 'express';
import Joi from '@hapi/joi';
import requestMiddleware from '../../middleware/request-middleware';
import Transaction from '../../models/Transaction';

export const updateTransactionSchema = Joi.object().keys({
  contractId: Joi.number(),
  description: Joi.string(),
  value: Joi.number(),
  isImported: Joi.boolean()
});

const update: RequestHandler = async (req, res) => {
  await Transaction.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).send(
    { message: 'Updated' }
  );
};

export default requestMiddleware(update, { validation: { body: updateTransactionSchema } });
