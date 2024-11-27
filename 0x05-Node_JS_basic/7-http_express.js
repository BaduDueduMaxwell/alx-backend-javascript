const express = require("express");
const fs = require("fs");
const path = require("path");
const readline = require("readline");

const app = express();

const countStudents = (databasePath) => {
  return new Promise((resolve, reject) => {
    const students = { CS: [], SWE: [] };

    if (!fs.existsSync(databasePath)) {
      reject(new Error("Cannot load the database"));
      return;
    }

    const fileStream = fs.createReadStream(databasePath);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    rl.on("line", (line, idx) => {
      if (idx === 0) return;

      const fields = line.split(",");
      const firstName = fields[0];
      const field = fields[3];

      if (firstName && field) {
        if (field === "CS") students.CS.push(firstName);
        if (field === "SWE") students.SWE.push(firstName);
      }
    });

    rl.on("close", () => {
      resolve(students);
    });

    rl.on("error", (error) => {
      reject(error);
    });
  });
};

app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});

app.get("/students", (req, res) => {
  const databasePath = process.argv[2];

  if (!databasePath) {
    return res.status(400).send("Database path not provided");
  }

  countStudents(databasePath)
    .then((students) => {
      const totalStudents = students.CS.length + students.SWE.length;
      const csStudents = students.CS.join(", ");
      const sweStudents = students.SWE.join(", ");

      res.send(
        `This is the list of our students\nNumber of students: ${totalStudents}\nNumber of students in CS: ${students.CS.length}. List: ${csStudents}\nNumber of students in SWE: ${students.SWE.length}. List: ${sweStudents}`
      );
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
