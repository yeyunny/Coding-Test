const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("").map(String);

let arr = [];
input.map((item) => arr.unshift(item));
let count = 0;
for (let i = 0; i < arr.length; i++) {
  arr[i] === input[i] ? count++ : null;
}

count === input.length ? console.log(1) : console.log(0);
