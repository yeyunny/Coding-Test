const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split(" ").map(Number);

let answer = [];
const arr = [1, 1, 2, 2, 2, 8];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === input[i]) {
    answer.push(0);
  } else if (arr[i] !== input[i]) {
    answer.push(arr[i] - input[i]);
  }
}
console.log(answer.join(" "));
