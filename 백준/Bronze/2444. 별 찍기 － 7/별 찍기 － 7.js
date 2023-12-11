const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split(" ");

let num = Number(input);
for (let i = 1; i < num; i++) {
  let blank = " ".repeat(num - i);
  let stars = "*".repeat(i + (i - 1));
  console.log(blank + stars);
}

for (let j = num; j > 0; j--) {
  let blank = " ".repeat(num - j);
  let stars = "*".repeat(j + (j - 1));
  console.log(blank + stars);
}
