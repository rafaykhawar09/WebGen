var express = require("express")
var router = express.Router()
var db = require("../models");


// UPDATE route for Pictures
router.put("/:bizName/config/logo", function(req, res) {

  console.log(req.body);
  

    db.Picture.update({
        logo_url:req.body.logo_url,
        where: {
          WebContentID: req.body.id
        }
      }).then(function(data){
        res.send(data)
      }).catch(function(err){
          if (err)
          console.log(err);
      })

    })

// UPDATE route for background Image
router.put("/:bizName/config/background", function(req, res) {
console.log("background");

  console.log(req.body);
  

    db.Picture.update({
        hero_image_url:req.body.hero_image_url,
        where: {
          WebContentID: req.body.id
        }
      }).then(function(data){
        res.send(data)
      }).catch(function(err){
          if (err)
          console.log(err);
      })

    })

module.exports = router;