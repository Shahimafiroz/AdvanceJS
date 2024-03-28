const exp = require("express");
const app = exp();
app.use(exp.json());
// my mini data base
const users = [
  {
    name: "shahima",
    report: [
      {
        kidney1: true,
        kidney2: true,
      },
    ],
  },
  {
    name: "bikubikub",
    report: [
      {
        kidney1: true,
        kidney2: false,
      },
    ],
  },
];

/// The code is very verbose , it would not be as verbose if you use “filter” → coming soon For now lets look at an example

app.get("/", function (req, res) {
  let NoOfKidneys = 0;
  let NoOfHealthyKidneys = 0;
  let NoOfUnHealthyKidneys = 0;
  let NoOfpeople = users.length;

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const userReport = user.report[0];

    if (userReport.kidney1 === true) {
      NoOfHealthyKidneys++;
    } else {
      NoOfUnHealthyKidneys++;
    }

    if (userReport.kidney2 === true) {
      NoOfHealthyKidneys++;
    } else {
      NoOfUnHealthyKidneys++;
    }

    NoOfKidneys += 2; // Each user has 2 kidneys
  }

  res.json({
    NoOfKidneys,
    NoOfHealthyKidneys,
    NoOfUnHealthyKidneys,
    NoOfpeople,
  });
});

// middlewares
app.post("/", function (req, res) {
  console.log(req.body);
  const newUsername = req.body.Nameee;
  const kid1 = req.body.kid1;
  const kid2 = req.body.kid2;
  users.push({
    name: newUsername,
    report: [
      {
        kidney1: kid1,
        kidney2: kid2,
      },
    ],
  });
  res.json({
    msg: "naya customer aaya hai bhai loot le",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].report.length; j++) {
      if (users[i].report[j].kidney1 === false) {
        users[i].report[j].kidney1 = true;
      }
      if (users[i].report[j].kidney2 === false) {
        users[i].report[j].kidney2 = true;
      }
    }
  }
  res.json({
    msg: "haan bhai hogaya kidney transplant ",
  });
});

// for now keep this on hold  ---> its
app.delete("/", function (req, res) {
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].report.length; j++) {
      if (users[i].report[j].kidney1 === false) {
        users[i].report[j].kidney1 = null;
      } //if end 1
      if (users[i].report[j].kidney2 === false) {
        users[i].report[j].kidney2 = null;
      } // if end 2
    } // loop report end
  } // loop users end
  res.send({
    msg: "Ab tu nalla hai bahi",
  });
});

app.listen(3000, function () {
  console.log("Sun raha hoon Bhai ...BOl ");
});
