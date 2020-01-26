var express = require("express")
var router = express.Router()
var db = require("../models");


// UPDATE route for Pictures
router.post("/:bizName/config/picture", function(req, res) {

  console.log(req.body);
  

    db.Picture.update({
        picture_url:req.body.picture_url,
        where: {
          id: req.body.id
        }
      }).then(function(data){
        res.send(data)
      }).catch(function(err){
          if (err)
          console.log(err);
      })

    })

module.exports = router;