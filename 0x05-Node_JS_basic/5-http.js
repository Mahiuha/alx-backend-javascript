const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(process.argv[2]);
      res.end(`${students.join('\n')}`);
    } catch (err) {
      res.end(err.message);
    }
  }
  res.end();
});

app.listen(port);

module.exports = app;
