import {
  Model, Schema, model
} from 'mongoose';
import TimeStampPlugin, {
  ITimeStampedDocument
} from './plugins/timestamp-plugin';

export interface ITransaction extends ITimeStampedDocument {
  contractId: string;
  description: string;
  value: string;
  time: string;
  isImported: string;
  isDeleted: string;
}

interface ITransactionModel extends Model<ITransaction> { }

const TransactionSchema: Schema = new Schema({
  contractId: { type: Number, index: true, required: true },
  description: { type: String, required: true },
  value: { type: Number, required: true },
  time: { type: Date, required: true },
  isImported: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, required: true, default: new Date() },
  updatedAt: { type: Date, required: true, default: new Date() },
  isDeleted: { type: Boolean, required: true, default: false }
});

TransactionSchema.plugin(TimeStampPlugin);

// @ts-ignore
const Transaction: ITransactionModel = model<ITransaction, ITransactionModel>('Transaction', TransactionSchema);

export default Transaction;
