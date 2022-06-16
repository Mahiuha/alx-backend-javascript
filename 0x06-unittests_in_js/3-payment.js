const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const res = Utils.calculateNumber('SUM', totalAmount, totalShipping)
    console.log(`The total is: ${res}`);
}

module.exports = sendPaymentRequestToApi;
