const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('test the API', () => {
  it('test the API with status, body', (done) => {
    request('http://localhost:7865', 'GET', (er, rs, bd) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('Welcome to the payment system');
    });
    done();
  });
});
