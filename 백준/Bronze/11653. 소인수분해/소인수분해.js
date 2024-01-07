const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let n = fs.readFileSync(file).toString().trim() * 1;

let result = [];

for (let i = 2; i <= n; i++) {
  while (n % i === 0) {
    n = n / i;
    result.push(i);
  }
}
console.log(result.join("\n"));
