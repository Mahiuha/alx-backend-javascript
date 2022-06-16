const express = require('express');
const bdparser = require('body-parser')
const app = express();
app.use(bdparser.urlencoded({ extended: true }));
app.use(bdparser.json());
app.use(bdparser.raw());
const port = 7865;

app.get('/', (rq, rs) => {
  rs.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (rq, rs) => {
  rs.send(`Payment methods for cart ${rq.params.id}`);
});

app.get('/available_payments', (rq, rs) => {
  const ob = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }
  rs.json(ob);
});

app.post('/login', (rq, rs) => {
  rs.end(`Welcome ${rq.body.userName}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
