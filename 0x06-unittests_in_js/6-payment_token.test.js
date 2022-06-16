const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('getting resolved promise', function(done) {
    const promise = getPaymentTokenFromAPI(true);
    done();
  });
});
