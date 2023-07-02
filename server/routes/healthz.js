var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const url = req.protocol + "://" + req.get("host");
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  console.log("====================================");
  console.log("server ip is ---> " + ip);
  console.log("server host  ---> " + url);
  console.log("====================================");

  res.sendStatus(200);
});

module.exports = router;
