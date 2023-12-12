const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

let num = Number(input[0]);
let arr = [];
let count = 0;

for (let i = 1; i < num + 1; i++) {
  let str = input[i].split("");

  for (let j = 0; j < str.length; j++) {
    let n = arr.length;

    if (arr.includes(str[j]) === false) {
      arr.push(str[j]);
    } else if (arr.includes(str[j]) === true && arr[n - 1] === str[j]) {
      arr.push(str[j]);
    }
  }

  if (arr.length === str.length) count++;
  arr = [];
}

console.log(count);
