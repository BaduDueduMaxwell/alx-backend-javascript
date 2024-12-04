# Unit Testing with Mocha, Chai, and Sinon - Project Overview

This project, **"0x06. Unittests in JS"**, focuses on the fundamental principles and tools for testing JavaScript applications. It uses popular testing frameworks like Mocha, Chai, and Sinon to write, organize, and execute both unit and integration tests. Below is an overview of the project's requirements, tasks, and learning objectives.

---

## **Project Details**
- **Repository**: `alx-backend-javascript`
- **Directory**: `0x06-unittests_in_js`

---

## **Learning Objectives**
By completing this project, you will learn:
1. How to use Mocha to create test suites.
2. Different assertion libraries like Node's native `assert` or Chai.
3. How to organize and write long test suites effectively.
4. The use of spies and stubs for testing specific functionality without executing real code.
5. The concept of hooks (`beforeEach`, `afterEach`) and their applications.
6. Writing unit tests for asynchronous functions.
7. Integration testing with a simple Node.js server.

---

## **Requirements**
- **Environment**: Ubuntu 18.04, Node.js v12.x.x
- **Editors**: `vi`, `vim`, `emacs`, or `Visual Studio Code`
- **Code Style**: 
  - Files should end with a new line.
  - Code should use the `.js` extension.
  - All tests should pass without warnings or errors.

- **Testing Command**: 
  - All test files should run via `npm test <test_file_name>.test.js`.

---

## **Tasks**

### **0. Basic Test with Mocha and Node Assertion Library**
- **File(s)**: 
  - `0-calcul.js`: Implements `calculateNumber`, rounding inputs and returning their sum.
  - `0-calcul.test.js`: Tests `calculateNumber` using Node's `assert` library.

---

### **1. Combining Descriptions**
- **File(s)**: 
  - `1-calcul.js`: Extends the previous function to support operations (`SUM`, `SUBTRACT`, `DIVIDE`).
  - `1-calcul.test.js`: Organized tests using `describe`.

---

### **2. Basic Test Using Chai**
- **File(s)**:
  - `2-calcul_chai.js`: Similar to `1-calcul.js`.
  - `2-calcul_chai.test.js`: Tests rewritten with Chai's `expect`.

---

### **3. Spies**
- **Objective**: Verify calls to `Utils.calculateNumber` using Sinon spies.
- **File(s)**: 
  - `utils.js`: Encapsulates the `calculateNumber` function.
  - `3-payment.js`: Implements `sendPaymentRequestToApi`.
  - `3-payment.test.js`: Tests using Sinon spies.

---

### **4. Stubs**
- **Objective**: Replace `Utils.calculateNumber` with a stub for consistent results.
- **File(s)**:
  - `4-payment.js`, `4-payment.test.js`: Verifies function behavior with stubs and spies.

---

### **5. Hooks**
- **Objective**: Use `beforeEach` and `afterEach` to manage spies across tests.
- **File(s)**:
  - `5-payment.js`, `5-payment.test.js`: Tests using Mocha hooks.

---

### **6. Async Tests with Done**
- **Objective**: Test asynchronous behavior using Mocha's `done` callback.
- **File(s)**:
  - `6-payment_token.js`: Implements a function returning a Promise.
  - `6-payment_token.test.js`: Tests async behavior.

---

### **7. Skipping Tests**
- **Objective**: Use `.skip` to temporarily disable failing tests while debugging.
- **File(s)**: 
  - `7-skip.test.js`: Example of skipped test cases.

---

## **Resources**
- [Mocha Documentation](https://mochajs.org)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials)

---

## **Commands**
To execute the tests, use:
```bash
npm test <test_file_name>.test.js
```

Example for `0-calcul.test.js`:
```bash
npm test 0-calcul.test.js
```