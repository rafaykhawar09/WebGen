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
  
    // router.get("/:bizName", function(req, res) {
    //   db.Web_content.findOne({raw:true}).then(function(response){
    //     res.render("index", response);
    //   })
    // });
    router.get("/:bizName", function(req, res) {
      db.Account.findOne({
        where:{route:req.params.bizName},
        include:[{model: db.Web_content, include: [{model: db.Picture}]},
        {model: db.Hours}]
      }).then(function(response){        
        
        res.render("index", response);
        console.log(response);
        
        
      })
    });
    router.get("/:bizName/menu", function(req, res) {
      db.Account.findOne({
        raw:true,
        where:{route:req.params.bizName},

      }).then(function(response){    
        console.log(response.id);
        db.Menu.findAll({
          where:{AccountId:response.id},
          include:[db.Menu_sub_category, db.Menu_category]
          
        }).then(function(response){        
          // res.json(response)
          // console.log(response);
          res.render("menu", {Menu:response});
        }) 
      })
    });
  
  



module.exports = router;