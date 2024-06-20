const fs = require("fs"); // for func-2 file sysytem module

// Async function - 1

// function findSum(n) {
//   let ans = 0;
//   for (i = 0; i < n; i++) {
//     ans += i;
//   }
//   return ans;
// }

// function sumTill100() {
//   console.log(findSum(100));
//   return findSum(100);
// }

// setTimeout(sumTill100, 1000);
// console.log("heyeyeyey!");

// Async function 2

fs.readFile("readme.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("Hi there 1");

let ans = 0;
for (i = 0; i < 100000000; i++) {
  ans += i;
}

console.log("Hi there 2");
