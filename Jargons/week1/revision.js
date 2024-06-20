// const shahima = {
//   fn: "Shahima",
//   gender: "female",
// };
// const ages = [22, 23, 25, 66, 88, 44];

// // 2. program for largest age in the array
// let biggest;
// for (i = 0; i < ages.length; i++) {
//   biggest = ages[i];
//   if (ages[i] > ages[i + 1]) {
//     i = i + 1;
//   } else {
//     biggest = ages[i + 1];
//   }
// }
// console.log(biggest);

// // 1. porgram for even and odd ages in an array
// for (const element of ages) {
//   if (element % 2 != 0) {
//     console.log("not even ");
//   } else {
//     console.log("is even !");
//   }
// }

//3. funtions

// function findSum(a, b) {
//   const res = a + b;
//   return res;
// }

// const val = findSum(2, 3);
// console.log(val);

// let sum = 0;
// for (i = 0; i < 10000000000000; i++) {
//   sum = sum + 1;
// }

// console.log(sum);

// 4. functions can take other functions as input

function sum(num1, num2, funToCall) {
  let result = num1 + num2;
  // displayResult(result);
  // displayResultPassive(result);
  funToCall(result);
  return result;
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

sum(30, 22, displayResult);
sum(30, 22, displayResultPassive);

// this is function call back
