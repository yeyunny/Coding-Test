let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let a = Number(input);
let answer = 0;

for (let i = 1; i < a + 1; i++) {
  answer = answer + i;
}

    console.log(answer);