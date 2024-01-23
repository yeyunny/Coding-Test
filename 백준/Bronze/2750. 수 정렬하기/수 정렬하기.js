const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");
let arr = input.map(Number);
arr.shift();
arr.sort((a, b) => a - b);

const set = Array.from(new Set(arr));

for (let i in set) {
  console.log(set[i]);
}
