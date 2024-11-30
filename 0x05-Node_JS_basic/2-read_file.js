const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data
      .trim()
      .split('\n')
      .filter((line) => line.length > 0); // Filter out empty lines

    if (lines.length === 0) {
      throw new Error('Database is empty');
    }

    // Parse header and rows
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
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
