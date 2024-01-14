const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim();
let num = 0;

for (let i = 1; i < input; i++) {
  num += i;
}

console.log(num);
console.log(2);
