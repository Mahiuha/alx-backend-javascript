const express = require('express');
const router = require('./routes');

const app = express();

app.use('/', router);

app.listen(1245);
module.exports = app;
