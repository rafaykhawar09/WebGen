var express = require("express")
var router = express.Router()
var db = require("../models");


// Get route for updating desc
// router.get("/:bizName/config/desc", function(req, res) {
//     console.log(res);
    
//     db.Web_Content.findAll({
//       where:{AccountId:response.Accountid},
//     //   include:[db.Role]
      
//     }).then(function(response){        
//       // res.json(response)
//       console.log(response);
//       res.render("config", {Desc:response.description});
//     }) 
// });


// UPDATE Route for Web Items
      router.put("/:bizname/config/web", function(req, res) {
        console.log(req.body);
      
        db.Web_content.update({
            color_scheme:req.body.color_scheme,
            description:req.body.description,
            announcement:req.body.announcement,
            our_story:req.body.our_story,
            our_story_text:req.body.our_story_text,
            announcement:req.body.advance_reservation_limit,
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
 
module.exports = router;