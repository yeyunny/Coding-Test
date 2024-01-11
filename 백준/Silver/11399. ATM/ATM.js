const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim().split("\n");

let num = input[0] * 1;
let arr = input[1]
  .split(" ")
  .map(Number)
  .sort(function (a, b) {
    return b - a;
  });

let answer = 0;
for (let i = num - 1; i >= 0; i--) {
  answer = answer + arr[i] * (i + 1);
}
console.log(answer);
