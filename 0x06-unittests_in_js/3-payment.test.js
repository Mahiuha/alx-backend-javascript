const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const expect = chai.expect;


describe('sendPaymentRequestToApi', function() {
    it('validate the usage of the Utils function', function() {
      sinon.spy(Utils, 'calculateNumber');
      sendPaymentRequestToApi(100, 20);
      expect(Utils.calculateNumber.calledOnce).to.be.true;
      expect(Utils.calculateNumber.args[0][0]).to.equal('SUM');
      expect(Utils.calculateNumber.args[0][1]).to.equal(100);
      expect(Utils.calculateNumber.args[0][2]).to.equal(20);
      Utils.calculateNumber.restore();
    });
});
