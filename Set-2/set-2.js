// Task -1
const people = [
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 25, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 40, gender: "female" },
];

const filteredNames = people
  .filter((person) => person.gender !== "female")
  .map((person) => person.name);

console.log("task - 1 result", filteredNames);

// Task - 2
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

const bookTitles = books.map((book) => book.title);
console.log("task - 2 result", bookTitles);

// Task - 3
const square = (num) => num * num;
const double = (num) => num * 2;
const add5 = (num) => num + 5;

const composedFunction = (num) => add5(double(square(num)));

console.log("task - 3 result", composedFunction(3));

// Task - 4
const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2008 },
  { make: "Ford", model: "Focus", year: 2015 },
];

const sortedCars = cars.sort((a, b) => a.year - b.year);
console.log("task - 4 result", sortedCars);

// Task - 5
const allPeople = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const findAndUpdateAge = (people, name, newAge) => {
  const person = people.find((person) => person.name === name);
  if (person) {
    person.age = newAge;
  }
  return people;
};

const updatedPeople = findAndUpdateAge(allPeople, "Bob", 28);
console.log("task - 5 result", updatedPeople);

// Task - 6
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvenNumbers = numbers.reduce(
  (acc, num) => (num % 2 === 0 ? acc + num : acc),
  0
);
console.log("task - 6 result", sumOfEvenNumbers);

// Task - 7
const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log("task - 7 result", isLeapYear(2024));

// Task - 8
const countVowels = (str) => {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
};

console.log("task - 8 result", countVowels("Happy New Year"));

// Task - 9
const allNumbers = [1, 2, 2, 3, 4, 4, 5, 5, 6];

const uniqueNumbers = Array.from(new Set(allNumbers));
console.log("task - 9 result", uniqueNumbers);

// Task - 10
const findMaxValue = (numbers) => Math.max(...numbers);

console.log("task - 10 result", findMaxValue([10, 5, 20, 15]));

// Task - 11
const students = [
  { name: "Alice", grades: [80, 90, 75] },
  { name: "Bob", grades: [85, 92, 88] },
  { name: "Charlie", grades: [90, 95, 87] },
];

const sortByAverageGrade = (students) => {
  return students.sort((a, b) => {
    const avgA =
      a.grades.reduce((acc, grade) => acc + grade, 0) / a.grades.length;
    const avgB =
      b.grades.reduce((acc, grade) => acc + grade, 0) / b.grades.length;
    return avgB - avgA;
  });
};

console.log("task - 11 result", sortByAverageGrade(students));

// Task - 12
const items = [
  { quantity: 2, price: 10 },
  { quantity: 3, price: 20 },
  { quantity: 1, price: 5 },
];

const totalValue = items.reduce(
  (acc, item) => acc + item.quantity * item.price,
  0
);
console.log("task - 12 result", totalValue);

// Task - 13
const arrayIntersection = (arr1, arr2) =>
  arr1.filter((item) => arr2.includes(item));

console.log("task - 13 result", arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
