import { RequestHandler } from 'express';
import requestMiddleware from '../../middleware/request-middleware';
import Transaction from '../../models/Transaction';

const deleteTransaction: RequestHandler = async (req, res) => {
  await Transaction.findByIdAndUpdate(req.params.id, { isDeleted: true });
  res.send({ message: 'Deleted' });
};

export default requestMiddleware(deleteTransaction);
