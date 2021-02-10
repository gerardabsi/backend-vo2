import request from 'supertest';
import mockingoose from 'mockingoose';
import app from '../../src/app';
import BookModel from '../../src/models/Transaction';

describe('test mongoose Transaction', () => {
  test('should return the doc with findById', () => {
    const returnValue = {
      _id: '6023e555afb2a957f8c37b63',
      isImported: false,
      isDeleted: false,
      contractId: 17689,
      description: 'Rent payment',
      value: 100,
      createdAt: '2021-02-10T13:53:25.280Z',
      time: '2021-02-10T13:53:25.286Z',
      updatedAt: '2021-02-10T13:53:25.286Z'
    };

    mockingoose(BookModel).toReturn(returnValue, 'findOne');

    return BookModel.findById({ _id: '507f191e810c19729de860ea' }).then(doc => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(returnValue);
    });
  });
});
