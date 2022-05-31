const express = require('express');
const cRouting = require('./routes/index');

const app = express();
const hostname = 'localhost';
const port = 1245;

app.use('/', cRouting);

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});

module.exports = app;
