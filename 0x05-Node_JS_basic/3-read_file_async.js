const fs = require('fs');

function countStudents(path) {
  const promise = (resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, dataDb) => {
      if (err) reject(Error('Cannot load the database'));
      if (dataDb) {
        const inFields = {}; // {field: {counter: # of students, students: [list of students]}}
        const data = dataDb.split('\n');
        console.log(`Number of students: ${data.length - 1}`);

        for (let i = 1; i < data.length; i += 1) {
          const line = data[i].split(','); // get each word
          if (inFields[line[3]]) { // line[3] is the name field
            inFields[line[3]].counter += 1;
            inFields[line[3]].students.push(` ${line[0]}`); // line[0] is firstname
          } else {
            inFields[line[3]] = { counter: 1, students: [`${line[0]}`] };
          }
        }
        for (const key in inFields) {
          if (Object.prototype.hasOwnProperty.call(inFields, key)) {
            console.log(`Number of students in ${key}: ${inFields[key].counter}. List: ${inFields[key].students}`);
          }
        }
        // ret obj of students in fields and number of students
        resolve({ inFields, counter: data.length - 1 });
      }
    });
  };
  return new Promise(promise);
}
module.exports = countStudents;
