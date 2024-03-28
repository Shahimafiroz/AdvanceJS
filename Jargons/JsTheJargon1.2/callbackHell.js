setTimeout(function () {
  console.log("1st set time out ");
  setTimeout(function () {
    console.log("2nd set time out");
    setTimeout(function () {
      console.log("3rd set timeout");
    }, 3000);
  }, 2000);
}, 1000);
