const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
//fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let num = 0;
let string = input[1].split("").map(Number);
string.map((item) => (num += item));
console.log(num);
