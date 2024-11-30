const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data
          .trim()
          .split('\n')
          .filter((line) => line.length > 0);

        if (lines.length === 0) {
          reject(new Error('Database is empty'));
          return;
        }

        const header = lines[0].split(',');
        const rows = lines.slice(1);

        const studentsByField = {};
        let totalStudents = 0;

        rows.forEach((row) => {
          const values = row.split(',');

          if (values.length !== header.length) {
            return;
          }

          const [firstname, , , field] = values;
          if (field) {
            totalStudents += 1;
            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(firstname);
          }
        });

        console.log(`Number of students: ${totalStudents}`);
        for (const [field, students] of Object.entries(studentsByField)) {
          console.log(
            `Number of students in ${field}: ${
              students.length
            }. List: ${students.join(', ')}`,
          );
        }

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
