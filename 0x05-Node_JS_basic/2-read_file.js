const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const fields = {};
    const students = data.split('\n').map((student) => student.split(','));
    students.shift();

    console.log(`Number of students: ${students.length}`);

    students.forEach((student) => {
      if (!fields[student[3]]) fields[student[3]] = [];
      fields[student[3]].push(student[0]);
    });
    Object.keys(fields).forEach((key) => {
      console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};
