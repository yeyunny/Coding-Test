let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
let [q, w, e] = input;

console.log(q + w + e);
