const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n").map(String);

let N = Number(input[0].split(" ")[0]);
let arr = new Array(N).fill(0);

for (let i = 1; i < input.length; i++) {
  let start = Number(input[i].split(" ")[0]);
  let fin = Number(input[i].split(" ")[1]);
  let num = Number(input[i].split(" ")[2]);

  for (let j = start; j < fin + 1; j++) {
    arr[j - 1] = 0;
    arr[j - 1] = arr[j - 1] + num;
  }
}
console.log(arr.join(" "));
