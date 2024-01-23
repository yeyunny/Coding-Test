const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [a, b, c, d, e, f] = fs
  .readFileSync(file)
  .toString()
  .split(" ")
  .map(Number);

const arr = [];
for (let i = -999; i <= 999; i++) {
  for (let j = -999; j <= 999; j++) {
    if (a * i + b * j === c && d * i + e * j === f) {
      arr.push(i, j);
    }
  }
}
console.log(arr.join(" "));
