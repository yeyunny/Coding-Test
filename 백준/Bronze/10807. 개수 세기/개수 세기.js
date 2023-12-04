const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n").map(String);

let max = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let find = Number(input[2]);
let count = 0;

for (let i = 0; i < max; i++) {
  arr[i] === find ? count++ : 0;
}
console.log(count);
