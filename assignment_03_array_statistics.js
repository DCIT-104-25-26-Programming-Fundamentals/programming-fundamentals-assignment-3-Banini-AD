// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

function numbersSum (numbers){
  let sumTotal = 0
  for (let i = 0; i < numbers.length ; i++){
    sumTotal += numbers[i]
  }
  return sumTotal 
}

function numbersAvg (numbers){
  let total = numbersSum(numbers)
  let avg = total / numbers.length
  return avg
}
function maxNumber (numbers){
  let lgNum = numbers[0]
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > lgNum){
      lgNum = numbers[i]
    }
  }
  return lgNum
}

function minNumber (numbers){
  let smNum = numbers[0]
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] < smNum){
      smNum = numbers[i]
    }
  }
  return smNum
}

function main (){
  const readlineSync = require("readline-sync")
  const userInput = readlineSync.question("How many numbers? ")
  const N = parseInt(userInput)

  if (N < 0){
    console.log("Error: Enter a positive number")
    return
  }
  const numbers = [];
  for (let i = 0; i < N ; i ++){
    inputNum = readlineSync.question(`Enter Number ${i+1}: `)
    numbers.push(parseInt(inputNum))
  }
  console.log("Results: ")
  console.log(`Sum: ${numbersSum(numbers)}`)
  console.log(`Average: ${numbersAvg(numbers)}`)
  console.log(`Maximum: ${maxNumber(numbers)}`)
  console.log(`Minimum: ${minNumber(numbers)}`)
}
main()
