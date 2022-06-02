const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /', () => {
  it('/ correct status, result', () => {
    chai.request('http://localhost:7865')
      .get('/')
      .end((err, res) => {
        if (err) throw err;
        expect(res.statusCode).to.eql(200);
        expect(res.text).to.eql('Welcome to the payment system');
      })
  })
})
describe('GET /cart/:id', () => {
  it('correct status, result', () => {
    chai.request('http://localhost:7865')
      .get('/cart/12')
      .end((err, res) => {
        if (err) throw err;
        expect(res.statusCode).to.eql(200);
        expect(res.text).to.equal('Payment methods for cart 12');
      });
  })
  it('correct status if id isNaN', () => {
    chai.request('http://localhost:7865')
      .get('/cart/twelve')
      .end((err, res) => {
        if (err) throw err;
        expect(res.statusCode).to.equal(404);
      });
  })
})

describe('GET /available_payments', () => {
  it('should return correct status code and message', () => {
    chai.request('http://localhost:7865')
      .get('/available_payments')
      .end((err, res) => {
        if (err) throw err;
        expect(res.statusCode).to.equal(200);
        expect(JSON.parse(res.text)).to.eql({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
      });
  });
});
describe('POST /login', () => {
  it('returns the correct message', () => {
    chai.request('http://localhost:7865')
    .post('/login')
    .set({
      'method': 'POST'
    })
    .send({
      'body': { 'userName': 'Art' },
      'json': 'true'
    }), (err, res, body) => {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(body.text).to.equal('Welcome Art');
    }
  });
});
