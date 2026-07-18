let number = [11, 12, 13, 14, 15];
let double = number.map(num => num * 2);
let greater20 = number.filter(num => num > 20);
let total = number.reduce((sum, num) => sum + num, 0);
console.log("Original value :", number);
console.log("Map :", double);
console.log("Filter :", greater20);
console.log("Reduce :", total);
console.log("Divyanjali T052");
