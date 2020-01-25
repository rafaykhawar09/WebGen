var path = require("path");
var express = require("express");
var router = express.Router();
var db = require("../models");


  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/index.html"));
  });
  
  router.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/about.html"));
  });
  
    router.get("/:bizName", function(req, res) {
      db.Web_content.findOne({raw:true}).then(function(response){
        res.render("index", response);
      })
    });



module.exports = router;