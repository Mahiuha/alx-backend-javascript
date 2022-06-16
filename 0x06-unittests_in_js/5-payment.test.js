const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consolespy;

  beforeEach(() => {
    consolespy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    consolespy.restore();
  });

  it('test the send Pyament Request with 100, 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consolespy.calledWithExactly('The total is: 120')).to.be.true;
    expect(consolespy.CalledOnce);
  });

  it('test the send Pyament Request with 10, 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consolespy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consolespy.CalledOnce);
  });

});
