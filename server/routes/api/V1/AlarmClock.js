var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const authenticateToken = require("../../../middleware/userAuth");
const prisma = new PrismaClient();

router.get("/:id", authenticateToken, function (req, res, next) {
  const id = req.params.id;
  const alarm = prisma.alarmClock.findMany({
    select: {
      id: true,
      time: true,
      days: true,
      isOn: true,
    },
    where: {
      userId: parseInt(id),
    },
  });
  alarm.then((data) => {
    res.json(data[0]).status(200);
  });
});

router.post("/", function (req, res, next) {
  console.log(req.body);
  const alarm = req.body.time;
  const alarmDays = req.body.days;
  const alarmOn = req.body.isOn;
  const id = req.body.id;
  console.log(alarm, alarmDays, alarmOn, id);

  prisma.alarmClock
    .create({
      data: {
        time: alarm,
        days: alarmDays,
        isOn: alarmOn,
        user: {
          connect: {
            id: parseInt(id),
          },
        },
      },
    })
    .then((data) => {
      console.log("alarm created");
      res.json(data).status(200);
    });
});

router.post("/on", authenticateToken, function (req, res, next) {
  const alarmOn = req.body.isOn;
  const id = req.body.id;
  prisma.alarmClock
    .update({
      where: {
        id: id,
      },
      data: {
        isOn: alarmOn,
      },
    })
    .then((data) => {
      console.log("alarm on/off updated");
      res.json(data).status(200);
    });
});
router.post("/setDays", authenticateToken, function (req, res, next) {
  const alarmDays = req.body.days;
  const id = req.body.id;
  prisma.alarmClock
    .update({
      where: {
        id: id,
      },
      data: {
        days: alarmDays,
      },
    })
    .then((data) => {
      console.log("alarm days updated");
      res.json(data).status(200);
    });
});

router.post("/setTime", authenticateToken, function (req, res, next) {
  const alarm = req.body.time;
  const id = req.body.id;
  prisma.alarmClock
    .update({
      where: {
        id: id,
      },
      data: {
        time: alarm,
      },
    })
    .then((data) => {
      console.log("alarm time updated");
      res.json(data).status(200);
    });
});

module.exports = router;
