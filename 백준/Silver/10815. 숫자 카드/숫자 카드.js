const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(file).toString().trim().split("\n");

let cards = new Set(input[1].split(" "));
let check = input[3].split(" ");
const arr = [];

for (let card of check) {
  cards.has(card) ? arr.push(1) : arr.push(0);
}

console.log(arr.join(" "));
