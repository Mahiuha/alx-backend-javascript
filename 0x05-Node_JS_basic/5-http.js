const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.writeHead(200);
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.writeHead(200);
      res.write('This is the list of our students\n');
      countStudents(process.argv[2])
        .then((v) => {
          res.write(`Number of students: ${v.counter}\n`);
          let len = 0;
          for (const key in v.inFields) {
            if (Object.prototype.hasOwnProperty.call(v.inFields, key)) {
              res.write(`Number of students in ${key}: ${v.inFields[key].counter}. List: ${v.inFields[key].students}`);
              if (len !== Object.keys(v.inFields).length - 1) res.write('\n');
              len += 1;
            }
          }
          res.end();
        })
        .catch(() => {
          res.writeHead(404);
          res.write('This is the list of our students\n');
          res.end('Cannot load the database');
        });
      break;
    default:
      res.writeHead(404);
      res.write('This is the list of our students\n');
      res.end(('Cannot load the database'));
  }
});
app.listen(1245);

module.exports = app;
