
  
const fs = require('fs');

function countStudents(path) {
  const promise = (res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) rej(Error('Cannot load the database'));
      if (data) {
        let newData = data.toString().split('\n');
        newData = newData.slice(1, newData.length - 1);
        console.log(`Number of students: ${newData.length}`);
        const obj = {};
        newData.forEach((el) => {
          const student = el.split(',');
          if (!obj[student[3]]) obj[student[3]] = [];
          obj[student[3]].push(student[0]);
        });
        for (const cls in obj) {
          if (cls) console.log(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`);
        }
      }
      res();
    });
  };
  return new Promise(promise);
}

module.exports = countStudents;
