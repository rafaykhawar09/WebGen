var express = require("express")
var router = express.Router()
var db = require("../models");


router.post("/createuser", function(req, res) {
    console.log(req.body);
    
    db.Account.create({
        account_owner:req.body.name,
        company_name:req.body.company,
        phone:req.body.phone,
        route:req.body.company.toLowerCase()
      }).then(function(data){
          console.log("this is .then");
          
        db.User.create({
            email:req.body.email,
            name:req.body.name,
            password:req.body.password,
            AccountId:1
          }).then(function(data){
            res.send(data)
          })
       
      }).catch(function(err){
          console.log(err);
          if (err)
          console.log(err);
          
      })
   
    })

module.exports = router;