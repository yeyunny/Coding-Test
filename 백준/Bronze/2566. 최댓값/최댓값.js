const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
let num = [];
let result = [];

for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(" ").map(Number);
  let max = Math.max(...arr);
  num.push(max);
  result.push([i, max]);
}

input[num.indexOf(Math.max(...num))].split(" ").map((item, idx) => {
  if (Math.max(...num) === Number(item)) {
    console.log(
      `${Number(item)}
${num.indexOf(Math.max(...num)) + 1} ${idx + 1}`
    );
  }
});
