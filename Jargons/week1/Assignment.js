// Assignment Problem 1

for (i = 0; i <= 30; i++) {
  console.log(i);
}

//Assignment Problem 2

setTimeout(a, 1000);
console.time("label");

function a() {
  console.timeEnd("label");
}

// Assignment  3

function ShowTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  let currentTime = hour + ":" + min + ":" + sec;

  console.log(currentTime);
}

setInterval(ShowTime, 1 * 1000);

ShowTime();
