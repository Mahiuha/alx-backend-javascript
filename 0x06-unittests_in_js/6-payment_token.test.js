const chai = require('chai');
const expect = chai.expect;

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('test async testing', (done) => {
    getPaymentTokenFromAPI(true)
    .then((res) => {
      expect(res).to.eql({data: 'Successful response from the API' });
      done();
    })
    .catch((error) => {
      done(error);
    });
  });
});
