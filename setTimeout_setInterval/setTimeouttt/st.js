/*
Problems with setTimeout()
Problem 1:
Write a function that logs "Hello, World!" to the console after a delay of 3 seconds.
*/

// function hello() {
//   console.log("hello world");
// }
// setTimeout(hello, 1000);

/*
Problem 2:
Create a function that accepts a message and a delay time in milliseconds, then logs the message to the console after the specified delay.
*/
// const messag = prompt("enter message");
// console.log(messag);
// const delay = prompt(
//   "enter the delay after which u need to see the message (scale => 1000 = 1sec)"
// );
// console.log(delay);
// function displyMessage() {
//   alert(messag);
// }
// setTimeout();

/*
Problem 3:
Write a function that changes the background color of a webpage to blue after a delay of 5 seconds.
*/

// function changeBodyColor() {
//   document.body.style.backgroundColor = "green";
// }
// setTimeout(changeBodyColor, 3000);

/*
Problem 4:
Create a function that logs the numbers from 1 to 5, with each number logged after an additional second delay. (1 after 1 second, 2 after 2 seconds, etc.)
*/

// brings us to clousers

// function logNumbersAfterDelay() {
// let startTime = Date.now();

// function elapsedTime(n) {
//   // include n for problem 4
//   const currentTime = Date.now();
//   const elapsedTime = (currentTime - startTime) / 1000;
//   console.log(" Number : " + n + "  TimeInterval " + elapsedTime);
// }

//   for (let i = 1; i < 6; i++) {
//     setTimeout(() => elapsedTime(i), i * 1000);
//   }
// }

// logNumbersAfterDelay();
// function logNumbersAfterDelay() {

// }

/*
Problem 5:
Write a function that logs "This is a delayed message" to the console after a delay of 4 seconds, then logs "This is another delayed message" after an additional 2 seconds.
*/

let startTime = Date.now();

function elapsedTime() {
  // include n for problem 4
  const currentTime = Date.now();
  const elapsedTime = (currentTime - startTime) / 1000;
  console.log("TimeInterval " + elapsedTime);
}

function oneinsideother() {
  setTimeout(function () {
    elapsedTime();
    console.log("this is a delayed message after 4 seconds");
    setTimeout(function () {
      elapsedTime();
      console.log("this is a delayed message after 2 seconds");
    }, 2000);
  }, 4000);
}

oneinsideother();
