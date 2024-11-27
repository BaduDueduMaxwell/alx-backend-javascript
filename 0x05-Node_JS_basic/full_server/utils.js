import fs from 'fs';
import readline from 'readline';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    const students = { CS: [], SWE: [] };

    if (!fs.existsSync(filePath)) {
      return reject(new Error('Cannot load the database'));
    }

    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    rl.on('line', (line, idx) => {
      if (idx === 0) return;

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
};
