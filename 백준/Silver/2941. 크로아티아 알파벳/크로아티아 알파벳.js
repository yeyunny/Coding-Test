const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

const arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let result = input;

for (let alphabet of arr) {
  result = result.split(alphabet).join("@");
}
console.log(result.length);
