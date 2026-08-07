// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

function readMatrix(rows, cols) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let rowInput = readlineSync.question(`Enter row ${i + 1}: `);
    let values = rowInput.split(' ');
    let row = [];
    for (let v of values) {
      row.push(parseInt(v));
    }
    matrix.push(row);
  }
  return matrix;
}

function printMatrix(matrix) {
  for (let row of matrix) {
    let line = '';
    for (let val of row) {
      line = line + val + '\t';
    }
    console.log(line);
  }
}

function transposeMatrix(matrix, rows, cols) {
  let result = [];
  for (let i = 0; i < cols; i++) {
    let newRow = [];
    for (let j = 0; j < rows; j++) {
      newRow.push(matrix[j][i]);
    }
    result.push(newRow);
  }
  return result;
}

function addMatrices(a, b, rows, cols) {
  let result = [];
  for (let i = 0; i < rows; i++) {
    let newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(a[i][j] + b[i][j]);
    }
    result.push(newRow);
  }
  return result;
}

function multiplyMatrices(a, b, m, n, p) {
  let result = [];
  for (let i = 0; i < m; i++) {
    let newRow = [];
    for (let j = 0; j < p; j++) {
      let total = 0;
      for (let k = 0; k < n; k++) {
        total = total + a[i][k] * b[k][j];
      }
      newRow.push(total);
    }
    result.push(newRow);
  }
  return result;
}

function main() {
  console.log('PART A: Transpose a Matrix');
  let rows = parseInt(readlineSync.question('Enter number of rows: '));
  let cols = parseInt(readlineSync.question('Enter number of columns: '));
  let matrix = readMatrix(rows, cols);
  console.log('Original Matrix:');
  printMatrix(matrix);
  let transposed = transposeMatrix(matrix, rows, cols);
  console.log('Transposed Matrix:');
  printMatrix(transposed);

  console.log('');
  console.log('PART B: Add Two Matrices');
  let rowsB = parseInt(readlineSync.question('Enter number of rows: '));
  let colsB = parseInt(readlineSync.question('Enter number of columns: '));
  console.log('Enter Matrix A:');
  let matrixA = readMatrix(rowsB, colsB);
  console.log('Enter Matrix B:');
  let matrixB = readMatrix(rowsB, colsB);
  let sumMatrix = addMatrices(matrixA, matrixB, rowsB, colsB);
  console.log('Sum Matrix:');
  printMatrix(sumMatrix);

  console.log('');
  console.log('PART C: Multiply Two Matrices');
  let m = parseInt(readlineSync.question('Enter rows of Matrix A: '));
  let n = parseInt(readlineSync.question('Enter columns of Matrix A (= rows of Matrix B): '));
  let p = parseInt(readlineSync.question('Enter columns of Matrix B: '));
  console.log('Enter Matrix A:');
  let matrixA2 = readMatrix(m, n);
  console.log('Enter Matrix B:');
  let matrixB2 = readMatrix(n, p);
  let product = multiplyMatrices(matrixA2, matrixB2, m, n, p);
  console.log('Product Matrix:');
  printMatrix(product);
}

main();