const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n").map(String);

for (let i = 0; i < input.length; i++) {
  console.log(Number(input[i].split(" ")[0]) + Number(input[i].split(" ")[1]));
}
