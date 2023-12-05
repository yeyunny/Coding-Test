const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n").map(String);
//fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let N = Number(input[0].split(" ")[0]);
let M = Number(input[0].split(" ")[1]);

let arr = Array.from(new Array(N), (x, i) => i + 1);

for (let i = 1; i < input.length; i++) {
  let start = Number(input[i].split(" ")[0]);
  let fin = Number(input[i].split(" ")[1]);
  let push = arr[start - 1];
  let pull = arr[fin - 1];

  arr[start - 1] = 0;
  arr[fin - 1] = 0;

  if (start === fin) {
    arr[start - 1] = arr[start - 1] + pull;
  } else if (start !== fin) {
    arr[start - 1] = arr[start - 1] + pull;
    arr[fin - 1] = arr[fin - 1] + push;
  }
}
console.log(arr.join(" "));
