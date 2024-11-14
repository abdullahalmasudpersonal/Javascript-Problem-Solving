//  problem no 01 --- Array Filtering And Mapping
// ---Array Filtering And Mapping-- Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.
const peoples = [
  { name: "Abdullah", age: 28, gender: "Male" },
  { name: "Nadia", age: 22, gender: "Female" },
  { name: "Tanvir", age: 22, gender: "Male" },
  { name: "Saki", age: 32, gender: "Male" },
  { name: "Humaira", age: 32, gender: "Female" },
  { name: "Sara", age: 25, gender: "Female" },
  { name: "Mahmud", age: 27, gender: "Male" },
  { name: "Mahmuda", age: 27, gender: "Female" },
];
function femaleFilterAndMapRemainingPeople(people) {
  const result = people
    .filter((person) => person.gender !== "Female")
    .map((person) => person.name);
  return result;
}
const result = femaleFilterAndMapRemainingPeople(peoples);
/// console.log("Problem-No-01", result);

/* problem no 02 --- Object Manipulation---  */
/// --Object Manipulation-- Create An Array Of Objects, Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.
const books = [
  { title: "Boker Vetor Nodi", author: "Humayun Ahmed", year: 1990 },
  { title: "Putul Nacher Itikotha", author: "Manik Bandopadhyay", year: 1936 },
  { title: "Saatkahon", author: "Samaresh Majumdar", year: 1981 },
  { title: "Kobi", author: "Tarashankar Bandopadhyay", year: 1949 },
  { title: "Lalsalu", author: "Syed Waliullah", year: 1948 },
];
function getBookTitles(book) {
  return book.map((book) => book.title);
}
const titles = getBookTitles(books);
/// console.log("Problem-No-02", titles);

/* problem no 03 --- Function Composition---  */
/// --Function Composition--- Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;
const squareDoubleAddFive = (num) => addFive(double(square(num)));
//// console.log("Problem-No-03", squareDoubleAddFive(3));

/* problem no 04 --- Sorting Objects---  */
//// --- Sorting Objects--- Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Chevrolet", model: "Malibu", year: 2019 },
  { make: "Nissan", model: "Altima", year: 2022 },
];
const res = cars.sort((a, b) => a.year - b.year);
/// console.log("Problem-No-04", res);

/* problem no 05 --- Find and Modify---  */
///// ---Find and Modify--- Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
const persons = [
  { name: "Abdullah", age: 25 },
  { name: "Mahmud", age: 35 },
  { name: "Saki", age: 20 },
  { name: "Taki", age: 15 },
];
function updatePersonAge(peoples, personName, newAge) {
  const person = peoples.find((per) => per.name === personName);
  if (person) {
    person.age = newAge;
  } else {
    console.log(`${personName} No name found ?`);
  }
  console.log("Problem-No-05", peoples);
}
updatePersonAge(persons, "Saki", 45);

//////////////// other ///////////////////////////
//////////////////////////////////////////////////
function separateDuplicates(arr) {
  let unique = [];
  let duplicates = [];

  let elementCount = {};

  // Count occurrences of each element
  arr.forEach((item) => {
    if (elementCount[item]) {
      elementCount[item]++;
    } else {
      elementCount[item] = 1;
    }
  });

  // Separate duplicates and unique elements
  for (let item in elementCount) {
    if (elementCount[item] > 1) {
      duplicates.push(item);
    } else {
      unique.push(item);
    }
  }

  return { unique, duplicates };
}

// Example usage
let array = [1, 2, 3, 4, 3, 2, 5, 6];
let { unique, duplicates } = separateDuplicates(array);

// console.log("Unique:", unique); // Output: Unique: [1, 4, 5, 6]
// console.log("Duplicates:", duplicates); // Output: Duplicates: [2, 3]
