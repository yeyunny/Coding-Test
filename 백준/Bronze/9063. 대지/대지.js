const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim().split("\n");

const x = [];
const y = [];

for (let i = 1; i < input.length; i++) {
  if (input[0] !== 1) {
    x.push(input[i].split(" ")[0] * 1);
    y.push(input[i].split(" ")[1] * 1);
  } else if (input[0] === 1) {
    console.log(0);
  }
}
x.sort((a, b) => b - a);
y.sort((a, b) => b - a);

console.log(
  input[0] * 1 === 1 ? 0 : (x.shift() - x.pop()) * (y.shift() - y.pop())
);
