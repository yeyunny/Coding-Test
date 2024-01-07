const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim().split("\n");
let [x, y] = input[0].split(" ");
let [w, h] = input[1].split(" ");
let [v, t] = input[2].split(" ");

const arr = [];

if (x === w) {
  arr.push(v);
} else if (x === v) {
  arr.push(w);
} else if (w === v) {
  arr.push(x);
}

if (y === h) {
  arr.push(t);
} else if (y === t) {
  arr.push(h);
} else if (h === t) {
  arr.push(y);
}

console.log(arr.join(" "));
