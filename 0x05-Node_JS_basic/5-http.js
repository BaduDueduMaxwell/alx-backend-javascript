const http = require('http');
const fs = require('fs');

/**
 * Reads a CSV file asynchronously and parses student data.
 *
 * @param {string} databasePath - Path to the CSV file.
 * @returns {Promise<string>} - A promise resolving to formatted student data.
 */
function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      const summary = { total: 0, fields: {} };

      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!firstname || !field) return; // Skip invalid lines

        summary.total += 1;
        if (!summary.fields[field]) summary.fields[field] = [];
        summary.fields[field].push(firstname);
      });

      let result = `Number of students: ${summary.total}\n`;
      for (const [field, names] of Object.entries(summary.fields)) {
        result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(result.trim());
    });
  });
}

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    const databasePath = process.argv[2];
    if (!databasePath) {
      res.end('Cannot load the database');
      return;
    }

    countStudents(databasePath)
      .then((studentData) => {
        res.end(studentData);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
