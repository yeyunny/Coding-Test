const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [a, b, c] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((v, w) => w - v);

if (b + c > a) {
  console.log(a + b + c);
} else {
  console.log((b + c) * 2 - 1);
}
