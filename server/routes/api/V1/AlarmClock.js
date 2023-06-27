var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const authenticateToken = require("../../../middleware/userAuth");
const prisma = new PrismaClient();

router.get("/:id",authenticateToken, function (req, res, next) {
  const id = req.params.id;
  const alarm = prisma.alarmClock.findMany({
    select: {
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
  const alarm = req.body.alarm;
  const alarmDays = req.body.alarmDays;
  const alarmOn = req.body.alarmOn;
  const userId = req.body.userId;
  // check if alarm already exists
  const alarmExists = prisma.alarm
    .findUnique({
      where: {
        userId: userId,
      },
    })
    .then((data) => {
      if (data) {
        // update alarm
        const updateAlarm = prisma.alarm.update({
          where: {
            userId: userId,
          },
          data: {
            time: alarm,
            days: alarmDays,
            isOn: alarmOn,
            updatedAt: new Date(),
          },
        });
        updateAlarm.then((data) => {
          res.json(data).status(200);
        });
      } else {
        // create alarm
        const createAlarm = prisma.alarm.create({
          data: {
            alarm: alarm,
            alarmDays: alarmDays,
            alarmOn: alarmOn,
            userId: userId,
          },
        });
        createAlarm.then((data) => {
          res.json(data).status(200);
        });
      }
    });
});

module.exports = router;
