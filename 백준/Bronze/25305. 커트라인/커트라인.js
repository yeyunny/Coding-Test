const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");
let [n, k] = input[0].split(" ");
let arr = input[1].split(" ").map(Number);

console.log(arr.sort((a, b) => b - a).splice(0, k)[k - 1]);
