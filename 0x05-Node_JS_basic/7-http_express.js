const express = require('express');
const fs = require('fs');
const readline = require('readline');

const app = express();

// Function to count students in the database
const countStudents = (databasePath) => new Promise((resolve, reject) => {
  const students = { CS: [], SWE: [] };

  if (!fs.existsSync(databasePath)) {
    reject(new Error('Cannot load the database'));
    return;
  }

  const fileStream = fs.createReadStream(databasePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  rl.on('line', (line, idx) => {
    if (idx === 0 || line.trim() === '') return; // Skip the header and empty lines
    const fields = line.split(',');
    const firstName = fields[0];
    const field = fields[3];

    if (firstName && field) {
      if (field === 'CS') students.CS.push(firstName);
      if (field === 'SWE') students.SWE.push(firstName);
    }
  });

  rl.on('close', () => {
    resolve(students);
  });

  rl.on('error', (error) => {
    reject(error);
  });
});

// Route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for /students endpoint
app.get('/students', (req, res) => {
  const databasePath = process.argv[2]; // Get database path from command-line arguments

  if (!databasePath) {
    return res.status(400).send('Database path not provided');
  }

  countStudents(databasePath)
    .then((students) => {
      const totalStudents = students.CS.length + students.SWE.length;
      const csStudents = students.CS.join(', ');
      const sweStudents = students.SWE.join(', ');

      return res.send(
        'This is the list of our students\n'
          + `Number of students: ${totalStudents}\n`
          + `Number of students in CS: ${students.CS.length}. List: ${csStudents}\n`
          + `Number of students in SWE: ${students.SWE.length}. List: ${sweStudents}`,
      );
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

// Start the server
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
