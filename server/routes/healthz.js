var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const url = req.protocol + "://" + req.get("host");
  console.log(url);

  res.sendStatus(200);
});

module.exports = router;
