const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);
let count = 0;
let num = 0;

arr.map((item) => {
  for (let i = 1; i < item + 1; i++) {
    if (item % i === 0) {
      count = count + 1;
    }
  }

  count === 2 ? (num = num + 1) : null;
  count = 0;
});
console.log(num);
