import { readFile } from 'fs';

const readDatabase = (filepath) => new Promise((resolve, reject) => {
  readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
      return reject(new Error('Cannot load the database'));
    }

    const dataSet = data.split('\n');
    const normalized = dataSet.map((line) => line.split(','))
      .filter((student) => student.length === 4);

    let FIRSTNAME = 0;
    let FIELD = 3;
    if (normalized[0].includes('firstname')) {
      const headers = normalized.shift();
      FIRSTNAME = headers.indexOf('firstname'); // 0
      FIELD = headers.indexOf('field'); // 3
    }

    const studentsPerFields = normalized.reduce((acc, student) => {
      const key = student[FIELD];
      acc[key] = [...acc[key] || [], student[FIRSTNAME]];
      return acc;
    }, {});

    return resolve(studentsPerFields);
  });
});

module.exports = readDatabase;
