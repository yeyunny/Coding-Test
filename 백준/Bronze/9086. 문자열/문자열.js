const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
//fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let num = Number(input[0]);
for (let i = 1; i < num + 1; i++) {
  let answer = input[i].length;

  console.log(input[i].split("")[0] + input[i].split("")[answer - 1]);
}
