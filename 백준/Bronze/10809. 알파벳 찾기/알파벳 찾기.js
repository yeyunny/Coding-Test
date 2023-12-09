const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("");
//fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

const arr = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 65).toLowerCase()
);

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (input[i] === arr[j]) {
      arr[j] = i;
    }
  }
}
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    arr[i] = -1;
  }
}

console.log(arr.join(" "));
