const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim().split("\n").map(Number);
let answer = [];
let result = [];

for (let i = 1; i < input.length; i++) {
  answer.push(parseInt(input[i] / 25));
  let here = input[i] - parseInt(input[i] / 25) * 25;
  answer.push(parseInt(here / 10));
  let ten = here - parseInt(here / 10) * 10;
  answer.push(parseInt(ten / 5));
  let last = ten - parseInt(ten / 5) * 5;
  answer.push(last);
  result.push(answer);
  answer = [];
}
result.map((item) => {
  console.log(item.join(" "));
});
