const fs = require('fs');

const aggregate = (data) => data.slice(1).reduce(
  (a, b) => {
    const [first, , , field] = b.split(',');
    if (field === 'CS') {
      a.cs.push(first);
    } else if (field === 'SWE') a.swe.push(first);
    return a;
  },
  { cs: [], swe: [] },
);

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, res) => {
    if (err) return reject(new Error('Cannot load the database'));
    return resolve(aggregate(res.split('\n')));
  });
});

module.exports = readDatabase;
