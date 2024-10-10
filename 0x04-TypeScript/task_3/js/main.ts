/// reference path='./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create an obj of type RowElement
const row: RowElement = {
  firstName: 'Guillame',
  lastName: 'Salva',
};

// Insert the row and store the new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with an age field
const updatedRow: RowElement = { ...row, age: 23 };

// Call the update and delete functions
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);