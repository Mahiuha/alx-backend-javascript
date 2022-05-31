const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(database)
    .then((data) => {
      const { students, csStudents, sweStudents } = data;
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${students.length}\n`);
      res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
      res.statusCode = 200;
      res.end();
    })
    .catch((error) => {
      res.statusCode = 500;
      res.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(port);

module.exports = app;
