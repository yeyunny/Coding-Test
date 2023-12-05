const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n").map(Number);
//fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
let mapping = fs.readFileSync(file).toString().trim().split("\n").map(Number);
const big = mapping.sort(function (a, b) {
  return b - a;
});

input.map((item, idx) => {
  if (big[0] === item) {
    console.log(item, idx + 1);
  }
});
