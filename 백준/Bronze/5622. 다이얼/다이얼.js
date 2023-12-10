const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("");

let arr = [];
for (let i = 65; i <= 90; i++) {
  arr.push(String.fromCharCode(i));
}

let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (arr[i] === input[j]) {
      if (64 < input[j].charCodeAt() && input[j].charCodeAt() < 68)
        count = count + 3;
      else if (67 < input[j].charCodeAt() && input[j].charCodeAt() < 71)
        count = count + 4;
      else if (70 < input[j].charCodeAt() && input[j].charCodeAt() < 74)
        count = count + 5;
      else if (73 < input[j].charCodeAt() && input[j].charCodeAt() < 77)
        count = count + 6;
      else if (76 < input[j].charCodeAt() && input[j].charCodeAt() < 80)
        count = count + 7;
      else if (79 < input[j].charCodeAt() && input[j].charCodeAt() < 84)
        count = count + 8;
      else if (83 < input[j].charCodeAt() && input[j].charCodeAt() < 87)
        count = count + 9;
      else if (86 < input[j].charCodeAt() && input[j].charCodeAt() < 91)
        count = count + 10;
    }
  }
}
console.log(count);
