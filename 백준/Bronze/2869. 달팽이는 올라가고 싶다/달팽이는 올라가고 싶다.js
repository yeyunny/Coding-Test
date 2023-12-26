const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim().split(" ").map(Number);
let up = input[0];
let down = input[1];
let total = input[2];
let days = 0;

days = Math.ceil((total - down) / (up - down));
console.log(days);