const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
//fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let [N, M] = input[0].split(" ").map(Number);

let basket = [];
for (let i = 1; i <= N; i++) {
  basket.push(i);
}

for (let i = 1; i < input.length; i++) {
  let [n, m] = input[i].split(" ").map(Number);
  let arr = [];

  for (let j = n - 1; j < m; j++) {
    arr.push(basket[j]);
  }

  arr.reverse();

  basket.splice(n - 1, m - n + 1, ...arr);
}
console.log(basket.join(" "));
