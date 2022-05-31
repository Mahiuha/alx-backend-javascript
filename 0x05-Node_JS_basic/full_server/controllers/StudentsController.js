const readDatabase = require('../utils');

export default class StudentsController {
  static async getAllStudents(request, response) {
    const resp = [];
    let msg = 'This is the list of our students\n';
    resp.push(msg);
    try {
      const students = await readDatabase('database.csv');
      Object.keys(students).forEach((key) => {
        const count = students[key].length;
        const listFN = students[key].join(', ');
        msg = `Number of students in ${key}: ${count}. List: ${listFN}`;
        resp.push(msg);
      });
      response.status(200);
      response.send(`${resp.join('\n')}`);
    } catch (e) {
      response.send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    const resp = [];
    let msg;
    try {
      const students = await readDatabase('database.csv');
      const listFN = students[major].join(', ');
      msg = `List: ${listFN}`;
      resp.push(msg);
      response.status(200);
      response.send(`${resp.join('\n')}`);
    } catch (e) {
      response.send('Cannot load the database');
    }
  }
}
