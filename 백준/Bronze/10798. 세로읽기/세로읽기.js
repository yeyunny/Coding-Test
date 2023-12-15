const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
const maxLength = Math.max(...input.map((line) => line.length));
let result = "";
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    if (i < input[j].length) {
      result += input[j][i];
    }
  }
}
console.log(result);
