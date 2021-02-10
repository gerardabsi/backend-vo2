/* eslint no-param-reassign:0*/
import { Document, Schema } from 'mongoose';

export interface ITimeStampedDocument extends Document {
  createdAt: Date;
  updatedAt: Date;
  time: Date;
}

const TimeStampPlugin = function (schema: Schema) {
  schema.add({ createdAt: { type: Date, index: true } });
  schema.add({ updatedAt: { type: Date, index: true } });
  schema.add({ time: { type: Date, index: true } });

  schema.pre<ITimeStampedDocument>('save', function (next) {
    if (this.isNew) {
      this.createdAt = new Date();
      this.time = new Date();
    }
    this.updatedAt = new Date();
    next();
  });
};

export default TimeStampPlugin;
