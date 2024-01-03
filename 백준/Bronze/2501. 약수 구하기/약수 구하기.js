const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let [n, k] = fs.readFileSync(file).toString().trim().split(" ").map(Number);
const arr = [];

for (let i = 1; i < n + 1; i++) {
  if (n % i === 0) arr.push(i);
}

console.log(arr[k - 1] === undefined ? 0 : arr[k - 1]);
