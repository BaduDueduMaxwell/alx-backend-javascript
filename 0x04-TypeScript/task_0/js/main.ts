// Define the student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const Student1: Student = {
  firstName: "Maxwell",
  lastName: "Duedu",
  age: 100,
  location: "Accra"
}

const Student2: Student = {
  firstName: "Walking",
  lastName: "Kode",
  age: 100,
  location: "London"
}

// Create two array of students
const studentsList = [Student1, Student2];

function renderTable(students: Student[]): void {
  const table = document.createElement('table');
  const tableHeader = `<tr><th>First Name</th>Location</th></tr>`;
  table.innerHTML = tableHeader;

  students.forEach((student) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    table.appendChild(row);
  });

  document.body.appendChild(table);
}
renderTable(studentsList);
