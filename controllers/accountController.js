var express = require("express")
var router = express.Router()
var db = require("../models");



router.post("/createaccount", function(req, res) {
    console.log(req.body);
    

  

    db.Account.create({
        account_owner:req.body.name,
        company_name:req.body.company,
        address:req.body.address,
        phone:req.body.phone,
        route:req.body.url
      }).then(function(data){
        db.User.create({
            email:req.body.email,
            name:req.body.name,
            password:req.body.password,
            AccountId:data.dataValues.id,
            RoleId:1
          }).then(function(data){
            db.Web_content.create({
              description: "Welcome to my restaurant, where you should never go home hungry!",
              our_story_text: "We began in my father's garage after I graduated from culinary school",
              AccountId:data.dataValues.id
          }).then(function(webData){
          db.Hours.create({
                start_day: "Monday",
                end_day: "Sunday",
                open: "11:00 am",
                close: "10:00 pm",
                AccountId:data.dataValues.id
            }).then(function(data){
              db.Picture.create({
                logo_url: "https://res.cloudinary.com/crunchy/image/upload/v1580066226/dsoxpprtwrh44dn1vb8j.png",
                WebContentId:webData.id
            }).then(function(data){
              db.Menu.bulkCreate([{
                    menu_item: "Prime Ribeye",
                    item_description: "Boneless ribeye grilled to perfection.",
                    price: 55,
                    optional_price: 0,
                    gluten_free_ind: false,
                    vegan_ind: false,
                    vegetarian_ind: false,
                    AccountId:data.dataValues.id,
                    MenuCategoryId: 4,
                    MenuSubCategoryId: 8},
                {   menu_item: "Denver Omelette",
                    item_description: "Three egg omelette with ham, bacon, tomatoes & bell peppers",
                    price: 13,
                    optional_price: 0,
                    gluten_free_ind: false,
                    vegan_ind: false,
                    vegetarian_ind: false,
                    AccountId:data.dataValues.id,
                    MenuCategoryId: 2,
                    MenuSubCategoryId: 2},
                {   menu_item: "Deluxe Burger",
                    item_description: "One third pound of our special ground beef blend topped with bacon and Tilamook cheddar.",
                    price: 9.50,
                    optional_price: 0,
                    gluten_free_ind: false,
                    vegan_ind: false,
                    vegetarian_ind: false,
                    AccountId:data.dataValues.id,
                    MenuCategoryId: 3,
                    MenuSubCategoryId: 2}
              ]).then(function (data) {
              res.send(data)
          })
        })
          })    
        })
      })
      }).catch(function(err){
          console.log(err);
          if (err)
          console.log(err);
          
      })

    })

module.exports = router;