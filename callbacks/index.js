//A callback is a function passed as an argument to another function.

// // Step 1: Define the callback function
// function greetMessage(message) {
//   console.log(message);
// }

// // Step 2: Define the function that accepts a callback
// function greet(name, callback) {
//   // Create the greeting message
//   const greeting = `Hello, ${name}!`;
//   // Call the callback function with the message
//   callback(greeting);
// }

// // Step 3: Call the function with the callback
// greet("Alice", greetMessage);

/*
Basic Problems
Problem 1: Greeting with Callback
Write a function named greet that takes a name and a callback function as arguments. The greet function should call the callback function with a greeting message that includes the provided name.
*/

// function greet(callback, nm) {
//   callback(`Hello  ${nm}`);
// }
// const nm = prompt("enter Your name");
// function alertt(message) {
//   alert(message);
// }
// greet(alertt, nm);

/*
Problem 2: Array Operation with Callback
Create a function named processArray that takes an array and a callback function. The processArray function should apply the callback function to each element of the array and return a new array with the results.
*/

let numbers = [1, 2, 3, 4, 5, 6];

function procesArray(nums) {
  nums = nums.map((num) => num + 2);
  console.log(nums);
  //   alert(nums);
}

function callingTheProcessArrayFunction(array, callback) {
  callback(array);
}

callingTheProcessArrayFunction(numbers, procesArray);

/*
Medium Problems
Problem 3: Simulate Asynchronous Task
Write a function named doTask that takes a callback function. Inside doTask, use setTimeout to simulate a task that takes 2 seconds to complete, then call the callback function.
*/

// function elapsedTime() {}

function doTask(tsk) {
  console.log(`${tsk} in process`);
  alert(`${tsk} in process`);
  console.log(`${tsk} complete`);
  alert(`${tsk} complete`);
}

const task = prompt("Enter the task to be done ");

function scheduletask(work, callback) {
  setTimeout(() => {
    callback(work);
  }, 2000);
}

scheduletask(task, doTask);

/*
Problem 4: Sequence Execution with Callback
Write a function named runSequentially that takes an array of functions and a final callback. Each function in the array should take a callback function as an argument and call it when finished. runSequentially should call each function in the array one after another, and then call the final callback when all functions are done.
*/

/*
Difficult Problems
Problem 5: Task with Error Handling
Create a function named performTask that takes a task function and two callbacks: one for success and one for error handling. The task function should simulate performing an action with a random chance of failure. If the task fails, call the error callback with an error message. If the task succeeds, call the success callback with a success message.
*/

/*
Problem 6: Simple Event System
Implement a simple event system with subscribe, unsubscribe, and publish methods. The subscribe method should take an event name and a callback, unsubscribe should remove a previously subscribed callback, and publish should trigger all callbacks associated with an event name.
*/
