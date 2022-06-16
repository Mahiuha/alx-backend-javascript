const chai = require('chai');
const request = require('request');
const expect = chai.expect;

describe('/GET request', function() {
    it('Response from get', function(done) {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };
      request(options, function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.be.a('string');
        expect(body).to.equal('Welcome to the payment system');
      });
      done();
    });
});
