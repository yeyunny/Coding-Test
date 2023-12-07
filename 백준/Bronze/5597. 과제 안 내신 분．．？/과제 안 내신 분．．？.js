const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n").map(Number);
//fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let answer = [];

for (let i = 1; i < 31; i++) {
  if (input.includes(i)) continue;
  answer.push(i);
}
answer.sort((a, b) => {
  return a - b;
});
console.log(`${answer[0]}\n${answer[1]}`);
