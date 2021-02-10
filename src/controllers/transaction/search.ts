import { RequestHandler } from 'express';
import { sumBy } from 'lodash';
import Joi from '@hapi/joi';
import requestMiddleware from '../../middleware/request-middleware';
import Transaction from '../../models/Transaction';

export const searchTransactionSchema = Joi.object().keys({
  startDate: Joi.string(),
  endDate: Joi.string(),
  contractId: Joi.string().required()
});

const buildTransactionSearchQuery = (
  startDate: string,
  endDate: string,
  contractId: string
): { [key: string]: any } => {
  const query: any = {};
  if (startDate && endDate) {
    query.createdAt = {
      $gte: new Date(startDate),
      $lt: new Date(endDate)
    };
  }
  if (contractId) {
    query.contractId = contractId;
  }

  return query;
};

const search: RequestHandler = async (req, res) => {
  const { startDate, endDate, contractId } = req.query;

  const query = buildTransactionSearchQuery(
    (startDate as string),
    (endDate as string),
    (contractId as string)
  );
  const transactions = await Transaction.find(query);
  const sum = sumBy(transactions, 'value');
  res.send({ sum, items: transactions });
};

export default requestMiddleware(search, { validation: { query: searchTransactionSchema } });
