const express = require('express');

const app = express();
app.use(express.json())

app.get('/', (req, res) => res.send('Welcome to the payment system'));
app.get('/cart/:id', (req, res) => {
  if (!isNaN(req.params.id)) res.send(`Payment methods for cart ${req.params.id}`);
  else res.status(404).end();
})
app.get('/available_payments', (req, res) => {
  const obj = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.send(obj);
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
});
app.listen(7865, () => console.log('API available on localhost port 7865'));

module.exports = app;
