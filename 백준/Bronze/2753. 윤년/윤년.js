let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

let [a] = input;

if (a % 4 === 0) {
  if (a % 100 === 0) {
    if (a % 400 === 0) console.log(1);
    else if (a % 400 !== 0) console.log(0);
  } else if (a % 100 !== 0) {
    console.log(1);
  }
} else if (a % 4 !== 0) console.log(0);
