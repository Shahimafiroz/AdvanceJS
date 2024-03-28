const fs = require("fs");

// async function

// function readtxtfunc(callbackFuncAsInput) { //--> SIMMY  //wrapper on top of JS Providede async func
//     fs.readFile("readme.txt", "utf-8", function (err, data) { // 2. Simmy Gets the ketchup(Reads this file)

//     callbackFuncAsInput(data); // 3. Simmy shouts to give the ketchup(Calls Ondone as)
//   });
// }
// //4. Simmy gives the ketchup once the Timmy is free
// function ondone(data) {
//   console.log(data); //5. Since Timmy is free he comesback and logs
// }

// readtxtfunc(ondone);// 1. Timmy (controller) calls Simmy to read callbackFuncAsInput code

// The timmy goes on to do his own Shit (if free goes back to take ketchup from simmy)

//********************************************************************************************************************************************************//

//2. PROMISE -the reason to introduce promise is to get rid of callbacks---> to avoid callback hell !

function readtxtfuncss() {
  // if u observe it does not have any callback func as input
  // 1. Simmy is promising first ,
  return new Promise(function (resolve) {
    fs.readFile("readme.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}
function ondoness(data) {
  console.log(data); // 3. You will get the data
}
console.log("Timmy is calling Simmy ");
readtxtfuncss().then(ondoness); // 2. Once the promise resolves
