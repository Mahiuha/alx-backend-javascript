'use strict';
const chai = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi function', () => {
  const spyConsole = sinon.spy(console, 'log');

  it('validate the usage of the Utils function', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber');
    stubUtils.withArgs('SUM', 100, 20).returns(10);
    sendPaymentRequestToApi(100, 20);
    chai.expect(spyConsole.calledOnce).to.be.true;
    chai.expect(spyConsole.calledWith('The total is: 10')).to.be.true;
    stubUtils.restore()
    spyConsole.restore();
  });
});
