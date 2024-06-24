/*
Problems with setInterval()
Problem 1:
Write a function that logs "I love JavaScript!" to the console every 2 seconds. Stop the logging after 10 seconds.
*/

// let startTime = Date.now();

// function elapsedTime() {
//   // include n for problem 4
//   const currentTime = Date.now();
//   const elapsedTime = (currentTime - startTime) / 1000;
//   console.log("TimeInterval " + elapsedTime);
// }

// setInterval(function () {
//   elapsedTime();
//   console.log("Shahima you can do it !! equal theory and equla practice");
// }, 2000);

/*
Problem 2:
Create a function that logs the current time to the console every second.
*/
// setInterval(function () {
//   const d = new Date();
//   const currentTime = d.toLocaleTimeString();
//   console.log(currentTime);
// }, 1000);

/*
Problem 3:
Write a function that logs the numbers from 1 to 10, one number per second.
*/

// function logNumbers() {
//   for (let i = 0; i < 11; i++) {
//     setInterval(function () {
//       console.log("Number : " + i);
//     }, 1000);
//   }
// }
// logNumbers();

/*
Problem 4:
Create a function that changes the background color of a webpage between red and green every 3 seconds.
*/

function changeBackgroundColur() {
  document.body.style.changeBackgroundColur = "red";
  setInterval(function () {
    document.body.changeBackgroundColur = "green";
  }, 1000);
}

/*
Problem 5:
Write a function that simulates a stopwatch, logging the elapsed time every second. Stop the stopwatch after 15 seconds.
*/
