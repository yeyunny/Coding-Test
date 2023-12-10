const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
//fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let time = Number(input[0]);

let answer = [];

for (let i = 1; i < time + 1; i++) {
  let arr = input[i].split("\n");

  let a = Number(arr[0].split(" ")[0]);
  let b = arr[0].split(" ")[1].split("");

  for (let j = 0; j < b.length; j++) {
    for (let k = 0; k < a; k++) {
      answer.push(b[j]);
    }
  }

  console.log(answer.join(""));

  answer = [];
}
