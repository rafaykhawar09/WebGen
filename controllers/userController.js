var express = require("express")
var router = express.Router()
var db = require("../models");


// CREATE Route for User Items
router.post("/:bizname/user", function(req, res) {
    console.log("req.body");
    
    console.log(req.body);
  
    db.User.create({
        email:req.body.email,
        name:req.body.name,
        password:req.body.password,
        AccountId:req.body.AccountId,
        RoleId:req.body.RoleId
      }).then(function(data){
          console.log("add item");
          
          console.log(data);
          
              res.send(data)
        //   })
      }).catch(function(err){
          console.log(err);
          if (err)
          console.log(err);
      })    
      });

// UPDATE Route for User Items
      router.put("/:bizname/user", function(req, res) {
        console.log(req.body);
      
        db.User.update({
            email:req.body.email,
            name:req.body.name,
            password:req.body.password,
            RoleId:req.body.RoleId,
                where: {
                id: req.body.id
              }
          }).then(function(data){
                  res.send(data)
            //   })
          }).catch(function(err){
              console.log(err);
              if (err)
              console.log(err);
          })   
          });
    

// DELETE route for User items
  router.delete("/:bizname/User/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(data) {
        res.json(data);
    //   });
    }).catch(function(err){
        console.log(err);
        if (err)
        console.log(err);
        
    });
  })

    
module.exports = router;