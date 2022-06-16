const express = require('express');
const app = express();
const port = 7865;

app.get('/', (rq, rs) => {
  rs.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (rq, rs) => {
  rs.send(`Payment methods for cart ${rq.params.id}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
