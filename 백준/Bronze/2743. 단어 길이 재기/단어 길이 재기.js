const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
//fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let sentence = input[0].split("");
console.log(sentence.length);
