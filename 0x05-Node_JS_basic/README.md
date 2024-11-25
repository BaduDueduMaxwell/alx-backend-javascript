# 0x05. NodeJS Basics

This repository contains a series of tasks aimed at learning and practicing the basics of Node.js and Express.js for backend development. The tasks are designed to provide hands-on experience with core Node.js functionalities, asynchronous programming, HTTP server creation, and more.

---

## Table of Contents

1. [Resources](#resources)
2. [Learning Objectives](#learning-objectives)
3. [Requirements](#requirements)
4. [Project Structure](#project-structure)
5. [Tasks](#tasks)
6. [How to Use](#how-to-use)

---

## Resources

To complete this project, it is recommended to refer to the following resources:

- [Node.js Getting Started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Process API Documentation](https://nodejs.org/dist/latest-v12.x/docs/api/process.html)
- [Child Process Module](https://nodejs.org/api/child_process.html)
- [Express Getting Started](https://expressjs.com/en/starter/installing.html)
- [Mocha Documentation](https://mochajs.org/)
- [Nodemon Documentation](https://nodemon.io/)

---

## Learning Objectives

By the end of this project, you should be able to:

- Run JavaScript using Node.js.
- Utilize Node.js modules.
- Use Node.js modules to read files.
- Access command-line arguments and environment variables via the `process` object.
- Create HTTP servers using Node.js.
- Build and manage routes using Express.js.
- Work with ES6 features in Node.js using Babel.
- Use Nodemon for faster development.

---

## Requirements

- **Environment**: Ubuntu 18.04 LTS with Node.js version 12.x.x
- **Editors**: vi, vim, emacs, or Visual Studio Code
- **Linting**: Code will be verified with ESLint.
- **Testing**: Use Jest and run tests with `npm run test`.
- **File Extensions**: All files should use the `.js` extension.
- **Project Checks**:
  - Code must pass linting.
  - All tests must pass using `npm run full-test`.

---

## Project Structure

```
0x05-Node_JS_basic/
├── 0-console.js
├── 1-stdin.js
├── 2-read_file.js
├── 3-read_file_async.js
├── 4-http.js
├── 5-http.js
├── 6-http_express.js
├── 7-http_express.js
├── database.csv
├── package.json
├── babel.config.js
└── .eslintrc.js
```

---

## Tasks

### 0. Executing Basic JavaScript with Node.js
- File: `0-console.js`
- Function: `displayMessage(string)`  
  Prints a string to STDOUT.

---

### 1. Using Process stdin
- File: `1-stdin.js`
- CLI Program:
  - Prompts the user for input and displays it.
  - Outputs a closing message when the process ends.

---

### 2. Reading a File Synchronously
- File: `2-read_file.js`
- Function: `countStudents(path)`
  - Reads `database.csv` and logs student counts and details by field.
  - Throws an error if the file cannot be loaded.

---

### 3. Reading a File Asynchronously
- File: `3-read_file_async.js`
- Function: `countStudents(path)`
  - Same functionality as task 2 but uses Promises and asynchronous file reading.

---

### 4. Creating a Small HTTP Server (Node.js)
- File: `4-http.js`
- Server:
  - Listens on port `1245`.
  - Responds with `Hello Holberton School!` to all requests.

---

### 5. Creating a More Complex HTTP Server (Node.js)
- File: `5-http.js`
- Server:
  - Adds `/students` endpoint.
  - `/students` displays a student list based on `database.csv`.

---

### 6. Creating a Small HTTP Server (Express.js)
- File: `6-http_express.js`
- Server:
  - Uses Express to serve `Hello Holberton School!`.

---

### 7. Creating a More Complex HTTP Server (Express.js)
- File: `7-http_express.js`
- Server:
  - `/` endpoint serves `Hello Holberton School!`.
  - `/students` endpoint serves student information from `database.csv`.

---

## How to Use

1. **Clone Repository**:
   ```bash
   git clone https://github.com/<your-username>/alx-backend-javascript.git
   cd 0x05-Node_JS_basic
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Tests**:
   ```bash
   npm run full-test
   ```

4. **Run Individual Scripts**:
   For example, to test `0-console.js`:
   ```bash
   node 0-console.js
   ```

5. **Start HTTP Servers**:
   - For Node.js servers:
     ```bash
     node 4-http.js
     ```
   - For Express.js servers:
     ```bash
     node 6-http_express.js
     ```
