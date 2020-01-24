var express = require("express")
var router = express.Router()
var db = require("../models");


router.post("/:resName/picture", function(req, res) {

  console.log(req.body);
  

    db.Picture.create({
        picture_url:req.body.picture_url,
      }).then(function(data){
        res.send(data)
      }).catch(function(err){
          if (err)
          console.log(err);
      })

    })

module.exports = router;