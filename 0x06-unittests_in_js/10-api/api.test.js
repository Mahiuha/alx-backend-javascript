const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('test the API', () => {
  it('test the API with localost:7865', (done) => {
    request('http://localhost:7865', 'GET', (er, rs, bd) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('Welcome to the payment system');
    });
    done();
  });

  it('test the API with cart/3', (done) => {
    request('http://localhost:7865/cart/3', 'GET', (er, rs, bd) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('Payment methods for cart 3');
    });
    done();
  });

  it('test the API with cart/234', (done) => {
    request('http://localhost:7865/cart/234', 'GET', (er, rs, bd) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('Payment methods for cart 234');
    });
    done();
  });

  it('test the API with cart/abc', (done) => {
    request('http://localhost:7865/cart/abc', 'GET', (er, rs) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(404);
    });
    done();
  });

  it('test the API with cart/2bc', (done) => {
    request('http://localhost:7865/cart/2bc', 'GET', (er, rs) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(404);
    });
    done();
  });

  it('test the API with cart/23a', (done) => {
    request('http://localhost:7865/cart/23a', 'GET', (er, rs) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(404);
    });
    done();
  });

  it('test the API with cart', (done) => {
    request('http://localhost:7865/cart', 'GET', (er, rs) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(404);
    });
    done();
  });

  it('test the API /login with some body', (done) => {
    const prm = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {
        userName: 'Holberton',
      },
    };
    request(prm, (er, rs, bd) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('Welcome Holberton');
    });
    done();
  });

  it('test the API /login with no body', (done) => {
    const prm = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      
    };
    request(prm, (er, rs, bd) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('Welcome undefined');
    });
    done();
  });

  it('test the API /available_payments', (done) => {
    const prm = {
      url: 'http://localhost:7865/available_payments',
      method: 'GET',
    };
    request(prm, (er, rs, bd) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
    });
    done();
  });


});
