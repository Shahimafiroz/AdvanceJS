// Promise

// function shahimaAsyncFunction() {
//   let asyncVar = new Promise(function (resolve) {
//     resolve("cnsdcjnds");
//   });
//   return asyncVar;
// }

// function main() {
//   shahimaAsyncFunction().then(function (value) {
//     console.log(value);
//   });
// }

// main();

// Async and await keywords

function shahimaAsyncFunction() {
  let asyncVar = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("cnsdcjnds");
    });
  });
  return asyncVar;
}

async function main() {
  // we added async here
  let value = await shahimaAsyncFunction(); // await added here
  console.log(value);
}

main();
