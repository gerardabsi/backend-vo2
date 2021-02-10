import { RequestHandler } from 'express';
import Joi from '@hapi/joi';
import requestMiddleware from '../../middleware/request-middleware';
import Transaction from '../../models/Transaction';

export const addTransactionSchema = Joi.object().keys({
  contractId: Joi.number().required(),
  description: Joi.string().required(),
  value: Joi.number().required()
});

const add: RequestHandler = async (req, res) => {
  const transaction = new Transaction(req.body);
  await transaction.save();

  res.status(201).send(
    transaction.toJSON()
  );
};

export default requestMiddleware(add, { validation: { body: addTransactionSchema } });
