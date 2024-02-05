// Problem 1: Print a predefined format
function printFormat() {
  console.log("Recently I heard that you’ve achieved 95% marks in your exam.");
  console.log("This is brilliant!");
  console.log(
    "I wish you’ll shine in your life! Good luck with all the barriers(/\\) in your life."
  );
}

printFormat();

// Problem 2: Perform arithmetic operations
function performOperations(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
  console.log(`${a} - ${b} = ${a - b}`);
  console.log(`${a} * ${b} = ${a * b}`);
  console.log(`${a} / ${b} = ${(a / b).toFixed(2)}`);
}

const num1 = 5;
const num2 = 2;

performOperations(num1, num2);

// Problem 3: Determine if a number is even or odd
function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

const number = 10;

checkEvenOrOdd(number);

// Problem 4: Determine if a number is positive, negative, or zero
function checkPositiveNegativeOrZero(num) {
  if (num > 0) {
    console.log("positive");
  } else if (num < 0) {
    console.log("negative");
  } else {
    console.log("zero");
  }
}

const value1 = 10;
const value2 = -50;
const value3 = 0;

checkPositiveNegativeOrZero(value1);
checkPositiveNegativeOrZero(value2);
checkPositiveNegativeOrZero(value3);

// Problem 5: Determine what item to buy based on the amount of money available
function buyItem(money) {
  if (money >= 20000) {
    console.log("Gucci Bag");
    if (money >= 40000) {
      console.log("Gucci Belt");
    }
  } else if (money >= 5000) {
    console.log("Levis Bag");
  } else {
    console.log("Something");
  }
}

const amount1 = 20000;
const amount2 = 6500;
const amount3 = 200;
const amount4 = 25400;

buyItem(amount1);
buyItem(amount2);
buyItem(amount3);
buyItem(amount4);
