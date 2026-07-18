let students = [
{
rollNo: 52,
name : "Divyanjali yadav",
marks : 80
},
{
rollNo: 54,
name : "Nidhi yadav",
marks : 80
},
{
rollNo: 50,
name : "Aashu yadav",
marks : 80
}

];
function display(s)
{
console.log("Student Details");
console.log("-----------------------");
for (let stud of s){
console.log(`Roll No: ${stud.rollNo}`);
console.log(`Roll No: ${stud.name}`);
console.log(`Roll No: ${stud.marks}`);
}
}
display(students);