const expect = require("chai").expect;
const sinon = require("sinon");

const sendPaymentRequestToApi = require("./3-payment.js");

describe("sendPaymentRequestToApi function", () => {
  let consoleSpy = null;
  beforeEach(() => (consoleSpy = sinon.spy(console, "log")));
  afterEach(() => consoleSpy.restore());

  it("sendPaymentRequestToAPI(100, 20)", () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith("The total is: 120")).to.be.true;
  });
  it("sendPaymentRequestToAPI(10, 10)", () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith("The total is: 20")).to.be.true;
  });
});
