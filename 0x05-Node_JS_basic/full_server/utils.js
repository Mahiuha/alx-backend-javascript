const fs = require('fs');

async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const resp = {};

      let content = data.toString().split('\n');
      content = content.filter((item) => item);
      if (content.length > 0) {
        content.shift();
      }

      const students = content.map((student) => student.split(','));
      const setField = new Set();
      students.forEach((student) => setField.add(student[3]));
      setField.forEach((field) => {
        const group = students.filter((student) => student[3] === field);
        const names = group.map((student) => student[0]);
        resp[field] = names;
      });
      resolve(resp);
    });
  });
}

module.exports = readDatabase;
