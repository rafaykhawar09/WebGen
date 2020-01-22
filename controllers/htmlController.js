
var path = require("path");
var express = require("express")
var router = express.Router()


  // index route loads index.html
  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/index.html"));
  });

  // about route loads about.html
  router.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/about.html"));
  });


module.exports = router;
