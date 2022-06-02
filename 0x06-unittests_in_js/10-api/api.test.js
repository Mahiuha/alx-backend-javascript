'use strict';
const request = require('request');
const chai = require('chai');

describe('GET /', () => {
  it('endpoint: GET /', (done) => {
    const call = {
      url: 'http://localhost:7865',
      method: 'GET',
    };
    request(call, (error, response, body) => {
      chai.expect(response.statusCode).to.equal(200);
      chai.expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('GET /cart/:id', () => {
  it('endpoint: GET /cart/:id', (done) => {
    const call = {
      url: 'http://localhost:7865/cart/12',
      method: 'GET',
    };
    request(call, (error, response, body) => {
      chai.expect(response.statusCode).to.equal(200);
      chai.expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
});

describe('GET /cart/:isNaN', () => {
  it('endpoint: GET /cart/:isNaN', (done) => {
    const call = {
      url: 'http://localhost:7865/cart/anything',
      method: 'GET',
    };
    request(call, (error, response, body) => {
      chai.expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('GET /available_payments', () => {
  it('endpoint: GET /available_payments', (done) => {
    const call = {
      url: 'http://localhost:7865/available_payments',
      method: 'GET',
    };
    request(call, (error, response, body) => {
      chai.expect(response.statusCode).to.equal(200);
      chai.expect(body).to.equal(
        '{"payment_methods":{"credit_cards":true,"paypal":false}}'
      );
      done();
    });
  });
});

describe('POST /login', () => {
  it('POST /login', (done) => {
    const call = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {
        userName: 'Javi',
      },
    };
    request(call, (error, response, body) => {
      chai.expect(response.statusCode).to.equal(200);
      chai.expect(body).to.equal('Welcome Javi');
      done();
    });
  });
});
