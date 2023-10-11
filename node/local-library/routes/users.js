var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
  // next();
});

router.get("/cool", (req, res, next) => {
  res.render("cool", { word: "cool" });
});

module.exports = router;
