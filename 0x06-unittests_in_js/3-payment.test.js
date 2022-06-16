const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('test the send payment request method', () => {
    const funcspy = sinon.spy(utils, 'calculateNumber');
    const reqApi = sendPaymentRequestToApi(100, 20);

    expect(funcspy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(utils.calculateNumber('SUM', 100, 20)).to.equal(reqApi);

    funcspy.restore();
  });
});
