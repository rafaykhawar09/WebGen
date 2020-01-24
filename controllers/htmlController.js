
var path = require("path");
var express = require("express");
var router = express.Router();
var db = require("../models");


  // index route loads index.html
  router.get("/", function(req, res) {
    db.Web_content.findAll({}).then(function(res){
      res.render("index", {description:res});
    })
    // res.sendFile(path.join(__dirname, "../public/assets/html/index.html"));
  });
  // router.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/assets/html/index.html"));
  // });

  // about route loads about.html
  router.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/about.html"));
  });
  router.get("/:bizName", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/res-home.html"));
  });


module.exports = router;
