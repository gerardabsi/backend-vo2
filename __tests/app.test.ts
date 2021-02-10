import request from 'supertest';
import application from '../src/app';

jest.mock('../src/models/Transaction');

describe('App Test', () => {
  test('GET /random-url should return 404', done => {
    request(application).get('/reset')
      .expect(404, done);
  });

  test('GET /transaction with no required contractId field should return 400', done => {
    request(application).get('/transaction').expect(400, done);
  });

  test('POST /transaction with no required body should return 400', done => {
    request(application).post('/transaction').expect(400, done);
  });

  test('PUT /transaction/6023e555afb2a957f8c37b62 should return 200', done => {
    request(application).put('/transaction/6023e555afb2a957f8c37b62').expect(200, done);
  });

  test('DELETE /transaction should return 200', done => {
    request(application).put('/transaction/6023e555afb2a957f8c37b62').expect(200, done);
  });
});
