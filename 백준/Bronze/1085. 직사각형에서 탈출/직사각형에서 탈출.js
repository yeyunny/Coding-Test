const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [x, y, w, h] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = [];
arr.push(x - 0, w - x, y - 0, h - y);
arr.sort((a, b) => a - b);
console.log(arr.shift());
