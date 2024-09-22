//   1.Task: Array Filtering And Mapping

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