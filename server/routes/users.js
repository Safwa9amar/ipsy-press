const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../middleware/userAuth");

const prisma = new PrismaClient();

/* GET users listing. */
router.get("/", authenticateToken, function (req, res) {
  const users = prisma.user.findMany();
  users.then((data) => {
    // remove password from response
    data.forEach((element) => {
      delete element.password;
    });
    res.json(data);
  });
});
router.get("/:id", authenticateToken, function (req, res) {
  const user = prisma.user.findUnique({
    where: {
      id: parseInt(req.params.id) || 1,
    },
  });
  user.then((data) => {
    // remove password from response
    delete data.password;
    res.json(data);
  });
});

router.post("/signup", function (req, res) {
  const form = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDate: new Date(req.body.birthDate),
    age: parseInt(
      (new Date() - new Date(req.body.birthDate)) / (1000 * 60 * 60 * 24 * 365)
    ),
    sex: req.body.sex,
    email: req.body.email,
    phone: req.body.phone,
    adress: req.body.adress,
    jobsID: req.body.jobsID,
    diseaseID: req.body.diseaseID,
    maritalStatus: req.body.maritalStatus,
    workPlace: req.body.workPlace,
    workSeniority: req.body.workSeniority,
    disability: req.body.disability,
    other: req.body.other,
    createdAt: new Date(),
    updatedAt: new Date(),
    password: req.body.password,
  };
  // check if form is valid (all fields are required)
  for (const [key, value] of Object.entries(form)) {
    if (!value) console.log(`${key}: ${value} is required`);
    if (key === "other") continue;
    if (key === "disability") continue;
    if (!value) return res.statusMessage(`${key} is required`).status(400);
  }
  console.log(form);
  // check if email already exists
  const user = prisma.user.findUnique({
    where: {
      email: form.email,
    },
    where: {
      phone: form.phone,
    },
  });

  user.then((data) => {
    if (data)
      return res.status(409).json("Error: Email or phone already exists");
    prisma.user
      .create({
        data: form,
      })
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
});
router.post("/login", function (req, res) {
  console.log(req.body);
  const secretKey = req.app.locals.secretKey;
  const form = {
    email: req.body.email,
    password: req.body.password,
  };
  prisma.user
    .findUnique({
      where: {
        email: form.email,
      },
    })
    .then((data) => {
      console.log(data);
      if (!data) return res.status(401).json("Error: Email is incorrect");
      if (data.password !== form.password)
        return res.status(401).json("Error: Password is incorrect");

      const token = jwt.sign(
        {
          form,
        },
        secretKey,
        {
          expiresIn: "1h",
        }
      );
      // check if user set alaram
      prisma.alarmClock
        .findUnique({
          select: {
            user: true,
          },
          where: {
            id: data.id,
          },
        })
        .then((alarm) => {
          if (alarm) {
            console.log("with alarm", alarm);
            res.json({
              token,
              user: data,
              alarm: alarm,
            });
          } else {
            console.log("no alarm");
            res.json({
              token,
              user: data,
              alarm: null,
            });
          }
        });
    });
});

router.put("/:id", authenticateToken, function (req, res) {
  let form = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDate: new Date(req.body.birthDate),
    age: parseInt(
      (new Date() - new Date(req.body.birthDate)) / (1000 * 60 * 60 * 24 * 365)
    ),
    sex: req.body.sex,
    email: req.body.email,
    phone: req.body.phone,
    adress: req.body.adress,
    job: req.body.job,
    maritalStatus: req.body.maritalStatus,
    workPlace: req.body.workPlace,
    workSeniority: req.body.workSeniority,
    disability: parseInt(req.body.disability) ? true : false,
    other: req.body.other,
    updatedAt: new Date(),
    password: req.body.password,
  };

  prisma.user
    .update({
      where: {
        id: parseInt(req.params.id),
      },
      data: form,
    })
    .then((data) => {
      res.json(data);
    });
});

module.exports = router;
