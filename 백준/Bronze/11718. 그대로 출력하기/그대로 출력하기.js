const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
