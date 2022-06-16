const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const rslt = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${rslt}`);
  return rslt;
}

module.exports = sendPaymentRequestToApi;
