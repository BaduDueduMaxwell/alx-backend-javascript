import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.query.database);
      let result = 'This is the list of our students\n';
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
      
      fields.forEach((field) => {
        const names = students[field].join(', ');
        result += `Number of students in ${field}: ${students[field].length}. List: ${names}\n`;
      });

      res.status(200).send(result);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(req.query.database);
      const names = students[major].join(', ');
      res.status(200).send(`List: ${names}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
