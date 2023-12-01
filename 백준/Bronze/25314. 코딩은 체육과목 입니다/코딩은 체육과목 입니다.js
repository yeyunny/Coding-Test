let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

let a = Number(input);
let time = a / 4;
const arr = ["int"];

for (let i = 0; i < time; i++) {
  arr.unshift("long");
}
console.log(arr.join(" "));
