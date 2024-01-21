const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim().split("\n");

const M = Number(input[0].split(" ")[1]);
const arr = input[1]
  .split(" ")
  .map((a) => +a)
  .sort((a, b) => a - b);

let sum = 0;
const CardSum = [];

for (let i = 0; i < arr.length - 2; i++) {
  for (let j = i + 1; j < arr.length - 1; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      sum = arr[i] + arr[j] + arr[k];
      if (M >= sum) {
        CardSum.push(sum);
      }
    }
  }
}
console.log(Math.max(...CardSum));
