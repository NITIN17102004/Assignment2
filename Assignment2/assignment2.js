// Original Student Array

const students = [
    { id: 101, name: "Aman", marks: 82, course: "Java" },
    { id: 102, name: "Priya", marks: 95, course: "Python" },
    { id: 103, name: "Rahul", marks: 67, course: "Java" },
    { id: 104, name: "Neha", marks: 76, course: "Web" },
    { id: 105, name: "Rohan", marks: 88, course: "Python" }
];

console.log("Original Array:");
console.log(students);


// Task 1 - Push

students.push({
    id: 106,
    name: "Simran",
    marks: 91,
    course: "Java"
});

console.log("\nTask 1 - After Push:");
console.log(students);


// Task 2 - Pop

const removedStudent = students.pop();

console.log("\nTask 2 - Removed Last Student:");
console.log(removedStudent);


// Task 3 - Unshift

students.unshift({
    id: 100,
    name: "Ankit",
    marks: 80,
    course: "Web"
});

console.log("\nTask 3 - After Unshift:");
console.log(students);


// Task 4 - Shift

const removedFirstStudent = students.shift();

console.log("\nTask 4 - Removed First Student:");
console.log(removedFirstStudent);


// Task 5 - Splice

const index = students.findIndex(student => student.id === 103);

students.splice(index, 1, {
    id: 107,
    name: "Karan",
    marks: 78,
    course: "Java"
});

console.log("\nTask 5 - After Splice:");
console.log(students);


// Task 6 - Slice

const firstThreeStudents = students.slice(0, 3);

console.log("\nTask 6 - First Three Students:");
console.log(firstThreeStudents);


// Task 7 - for...of

console.log("\nTask 7 - Student Details:");

for (const student of students) {

    console.log(`${student.name} - ${student.course} - ${student.marks}`);

}


// Task 8 - forEach

console.log("\nTask 8 - Student Names:");

students.forEach(student => {

    console.log(student.name);

});


// Task 9 - map

const studentNames = students.map(student => student.name);

console.log("\nTask 9 - Student Names Array:");
console.log(studentNames);


// Task 10 - filter

const topStudents = students.filter(student => student.marks >= 80);

console.log("\nTask 10 - Students Scoring 80 or Above:");
console.log(topStudents);


// Task 11 - reduce

const totalMarks = students.reduce((sum, student) => {

    return sum + student.marks;

}, 0);

const averageMarks = totalMarks / students.length;

console.log("\nTask 11:");
console.log("Total Marks =", totalMarks);
console.log("Average Marks =", averageMarks);


// Task 12 - sort

const ascendingOrder = [...students].sort((a, b) => a.marks - b.marks);

console.log("\nTask 12 - Ascending Order:");

ascendingOrder.forEach(student => {

    console.log(student.marks);

});


const descendingOrder = [...students].sort((a, b) => b.marks - a.marks);

console.log("\nTask 12 - Descending Order:");

descendingOrder.forEach(student => {

    console.log(student.marks);

});

