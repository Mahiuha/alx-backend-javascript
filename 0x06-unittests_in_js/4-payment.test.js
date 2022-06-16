const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('test the send payment request method', () => {
    const funcstub = sinon.stub(utils, 'calculateNumber');
    funcstub.returns(10);

    const reqApi = sendPaymentRequestToApi(100, 20);
    const consolespy = sinon.spy(console, 'log');

    expect(consolespy.calledWithExactly('The total is: 10'));
    expect(utils.calculateNumber('SUM', 100, 20)).to.equal(reqApi);

    funcstub.restore();
    consolespy.restore();
  });
});
