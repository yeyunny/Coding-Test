const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

const obj = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
  P: 0.0,
};
let total = 0;
let num = 0;

input.map((item) => {
  let [a, b, c] = item.split(" ");

  let time = c === "P";

  if (time === false) {
    total += Number(b) * obj[c];
    num += Number(b);
  }
});
console.log((total / num).toFixed(6));
