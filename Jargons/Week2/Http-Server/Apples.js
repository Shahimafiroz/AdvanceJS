const exp = require("express");
const app = exp();
app.use(exp.json());

let bags = [
  {
    bagName: "Bag1",
    apples: [
      {
        isRotten: false,
      },
      // {
      //   isRotten: false,
      // },
      // {
      //   isRotten: true,
      // },
      // {
      //   isRotten: false,
      // },
      // {
      //   isRotten: true,
      // },
    ],

    ///////
  },
];
////////////////////////////////////////////////////////////////////do ur shit below this ////////////

app.get("/", function (req, res) {
  const MyApples = bags[0].apples;
  const noOfApples = MyApples.length;
  let noOfRottenApples = 0;
  for (let i = 0; i < MyApples.length; i++) {
    if (MyApples[i].isRotten) {
      noOfRottenApples = noOfRottenApples + 1;
    }
  }
  const noOfUnRotten = noOfApples - noOfRottenApples;

  res.json({
    noOfApples,
    noOfRottenApples,
    noOfUnRotten,
  });
});

app.post("/", function (req, res) {
  const isRotten = req.body.isRotten;
  console.log(req.body);
  bags[0].apples.push({
    isRotten: isRotten,
  });
  res.json({
    msg: "Apple mil gaya ",
  });
});

app.put("/", function (req, res) {
  // console.log(bags[0].apples.length);
  for (let i = 0; i < bags[0].apples.length; i++) {
    bags[0].apples[i].isRotten = true;
  }
});

app.delete("/", function (req, res) {
  // im creating a new array (that contains only rotten apples ) and replacing the old array(that contains both)with this new array
  const newApplesArrr = [];
  for (let i = 0; i < bags[0].apples.length; i++) {
    if (bags[0].apples[i].isRotten === false) {
      newApplesArrr.push({
        isRotten: true,
      });
    }
  }
  bags[0].apples = newApplesArrr;
  res.json({
    msg: "le bhai saare sade hue apple khaa le inko ab",
  });
});
////////////////////////////////////////////////////////////////////do ur shit above this ////////////
app.listen(3000, function () {
  console.log("Bol..");
});
