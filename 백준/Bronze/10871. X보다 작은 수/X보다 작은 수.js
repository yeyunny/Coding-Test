const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n").map(String);
//fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let max = Number(input[0].split(" ")[0]);
let min = Number(input[0].split(" ")[1]);
let arr = input[1].split(" ").map(Number);
let answer = [];

for (let i = 0; i < max; i++) {
  arr[i] < min ? answer.push(arr[i]) : null;
}
console.log(answer.join(" "));
