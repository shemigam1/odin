var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });

  next();
});

router.get("/new", (req, res, next) => {
  res.render("form", {});

  next();
});

router.post("/new", (req, res, next) => {
  const user = req.body.user;
  const text = req.body.text;

  messages.push({ text, user, added: new Date() });
  res.redirect("/");

  next();
});

module.exports = router;
