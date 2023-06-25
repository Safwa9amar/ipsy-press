var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", function (req, res, next) {
  const jobs = prisma.jobs.findMany({
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  jobs.then((data) => {
    res.json(data).status(200);
  });
});

module.exports = router;
