//  problem no 01 --- Array Filtering And Mapping

// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

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
    const result = people.filter((person) => person.gender !== "Female").map((person) => person.name);
    return result;
}

const result = femaleFilterAndMapRemainingPeople(peoples);
console.log("Problem-No-01", result);


/* problem no 02 --- Object Manipulation---  */

/// Create An Array Of Objects, Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.



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
console.log("Problem-No-02", titles);
