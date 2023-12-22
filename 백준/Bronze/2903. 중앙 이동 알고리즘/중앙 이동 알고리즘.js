const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim();
let count = 1;
let time = Number(input);

for (let i = 0; i < time - 1; i++) {
  count = count * 2;
}

let num = 2 * count + 1;
console.log(num * num);
