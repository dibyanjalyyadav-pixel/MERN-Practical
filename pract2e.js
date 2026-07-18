let student = {
name : "Divyanjali yadav",
marks : 80,
course : "IT"
}
console.log("Original object");
console.log(student);
console.log("// Accessing value");
console.log("Name", student.name);
console.log("Marks", student.marks);
//add
student.city = "Mumbai";
console.log("// After Adding city");
console.log("City", student.city);

// update
student.marks = 89;
console.log("After Updating marks");

console.log("Marks", student.marks);
// delete
delete student.course;
console.log("After Adding city");
console.log("City", student.course);
console.log(student);