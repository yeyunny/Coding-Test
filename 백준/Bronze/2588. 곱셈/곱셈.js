let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [q, w, e] = input[1].split("").map(Number);

console.log(input[0] * e);
console.log(input[0] * w);
console.log(input[0] * q);
console.log((input[0] * q * 100) + (input[0] * w * 10) + input[0] * e);
