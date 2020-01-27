var express = require("express")
var router = express.Router()
var db = require("../models");



// Get route for managing menu
router.get("/:bizName/menu/config", function(req, res) {
  db.Menu.findAll({
    where:{AccountId:response.Accountid},
    include:[db.Menu_sub_category, db.Menu_category]
    
  }).then(function(response){        
    // res.json(response)
    // console.log(response);
    res.render("config", {Menu:response});
  }) 
});


// CREATE Route for Menu Items
router.post("/:bizname/menu/config", function(req, res) {
    console.log("req.body");
    
    console.log(req.body);
  
    db.Menu.create({
        menu_item:req.body.menu_item,
        item_description:req.body.item_description,
        price:req.body.price,
        MenuCategoryId:req.body.categoryId,
        MenuSubCategoryId:req.body.subCategoryId,
        AccountId:req.body.AccountId
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

// UPDATE Route for Menu Items
      router.put("/:bizname/menu/config", function(req, res) {
        console.log(req.body);
      
        db.Menu.update({
            menu_item:req.body.menu_item,
            item_description:req.body.item_description,
            price:req.body.price,
            MenuCategoryId:req.body.categoryId,
            MenuSubCategryId:req.body.subCategoryId,
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
    

// DELETE route for menu items
  router.delete("/:bizname/menu/config/:id", function(req, res) {
    db.Menu.destroy({
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