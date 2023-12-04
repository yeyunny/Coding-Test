const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n").map(String);


let max = Number(input[0].split(" ")[0]);
let arr = input[1].split(" ").map(Number);

arr.sort(function (a, b) {
  return a - b;
});

console.log(arr[0], arr[max - 1]);
