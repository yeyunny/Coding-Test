const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim().split(" ");

let n = input[0] * 1;
let i = 1;
let increase = 1;

while (n > i) {
  i += increase * 6;

  increase++;
}
console.log(increase);
