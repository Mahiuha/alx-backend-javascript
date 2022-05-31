const express = require('express');
const router = require('./routes/index');

const app = express();
const hostname = '127.0.0.1';
const port = 1245;
app.listen(port, hostname);

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

module.exports = app;
