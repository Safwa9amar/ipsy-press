var express = require("express");
var router = express.Router();

router.get("/:component", function (req, res, next) {
  console.log("this is test route", req.params);
  res.json({ message: "this is test route" });
});

module.exports = router;
