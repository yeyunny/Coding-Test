const readline = require("readline");
const rl = readline.createInterface({
 input: process.stdin, 
output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let leng = Number(input[0]);
  for (let i = 1; i < leng + 1; i++) {
    let a = Number(input[i].split(" ")[0]);
    let b = Number(input[i].split(" ")[1]);
    console.log(`Case #${i}:`, a, "+", b, "=", a + b);
  }

  process.exit();
});
