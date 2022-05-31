const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/students', async (req, res) => {
  countStudents(process.argv[2])
    .then((message) => {
      const response = `This is the list of our students\n${message}`;
      res.send(response);
    })
    .catch((err) => {
      res.send(`${err.message}`);
    });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
