const readDatabase = require('../utils');

const database = process.argv[2];

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(database)
      .then((studentsPerFields) => {
        response.statusCode = 200;
        const firstline = 'This is the list of our students';
        const message = [];
        for (const [key, value] of Object.entries(studentsPerFields)) {
          message.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        }
        console.log(message);
        response.send(`${firstline}\n${message.join('\n')}`);
      })
      .catch((error) => response.status(500).send(error.message));
  }

  static getAllStudentsByMajor(request, response) {
    const MAJOR = request.params.major;
    readDatabase(database)
      .then((studentsPerFields) => {
        if (!Object.keys(studentsPerFields).includes(MAJOR)) {
          return response.status(500).send('Major parameter must be CS or SWE');
        }
        const message = `List: ${studentsPerFields[MAJOR].join(', ')}`;
        return response.status(200).send(message);
      })
      .catch((error) => response.status(500).send(error.message));
  }
}

module.exports = StudentsController;
