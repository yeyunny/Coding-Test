let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);

console.log(a * b);
