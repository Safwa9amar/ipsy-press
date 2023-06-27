var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  json = {
    name: "hamza ben amor",
    age: 30,
    cars: [
      { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
      { name: "BMW", models: ["320", "X3", "X5"] },
      { name: "Fiat", models: ["500", "Panda"] },
    ],
  };
  console.log("hello from server");
  res.json(json);
});

module.exports = router;
