'use strict';
const Utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const res = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${res}`);
};
module.exports = sendPaymentRequestToApi;
