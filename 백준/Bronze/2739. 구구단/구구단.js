let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

let a = Number(input);

for (let i = 1; i < 10; i++) {
console.log(a + " " + "*" + " " + i + " " + "=" + " " + a * i);
}