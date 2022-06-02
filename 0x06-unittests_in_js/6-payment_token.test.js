'use strict';
const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
  it('async tests with done', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        chai.expect(res).to.include({ data: 'Successful response from the API' });
      done();
      })
      .catch((error) => done(error));
  });
});
