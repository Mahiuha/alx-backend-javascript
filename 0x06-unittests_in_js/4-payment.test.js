const expect = require('chai').expect;
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi function', () => {
  const consoleSpy = sinon.spy(console, 'log');

  it('validate the usage of the Utils function', () => {
    const utilStub = sinon.stub(Utils, 'calculateNumber');
    utilStub.withArgs('SUM', 100, 20).returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    utilStub.restore()
    consoleSpy.restore();
  });
});
