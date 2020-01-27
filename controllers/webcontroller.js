var express = require("express")
var router = express.Router()
var db = require("../models");


// UPDATE Route for Web_content Description 
router.put("/:bizname/config/desc", function (req, res) {
  var result = (JSON.parse(JSON.stringify(req.body)));

  db.Web_content.update(
    { description: result.description },
    { where: { AccountId: result.AccountId } }
  ).then(function (data) {
    res.send(data)
  }).catch(function (err) {
    console.log(err);
    if (err)
      console.log(err);
  })
});

// UPDATE Route for Web_content color_scheme 
router.put("/:bizname/config/color", function (req, res) {
  // console.log("This is req"+(req.body));
  var result = (JSON.parse(JSON.stringify(req.body)));

  db.Web_content.update(
    { color_scheme: result.color_scheme },
    { where: { AccountId: result.AccountId } }
    // announcement:req.body.announcement,
    // our_story:req.body.our_story,
    // our_story_text:req.body.our_story_text,
    // advance_reservation_limit:req.body.advance_reservation_limit,
  ).then(function (data) {
    // console.log("This is .then");
    res.send(data)
  }).catch(function (err) {
    console.log(err);
    if (err)
      console.log(err);
  })
});

// UPDATE Route for Picture hero_image_url (Background Image) 
router.put("/:bizname/config/hero", function (req, res) {
  // console.log("This is req"+(req.body));
  var result = (JSON.parse(JSON.stringify(req.body)));

  db.Web_content.update(
    { hero_image_url: result.hero_image_url },
    { where: { AccountId: result.AccountId } }
  ).then(function (data) {
    // console.log("This is .then");
    res.send(data)
  }).catch(function (err) {
    console.log(err);
    if (err)
      console.log(err);
  })
});


// UPDATE Route for Picture logo_url 
router.put("/:bizname/config/logo", function (req, res) {
  // console.log("This is req"+(req.body));
  var result = (JSON.parse(JSON.stringify(req.body)));

  db.Web_content.update(
    { logo_url: result.logo_url },
    { where: { AccountId: result.AccountId } }
  ).then(function (data) {
    // console.log("This is .then");
    res.send(data)
  }).catch(function (err) {
    console.log(err);
    if (err)
      console.log(err);
  })
});

// UPDATE Route for Web_content announcement 
router.put("/:bizname/config/announcement", function (req, res) {
  // console.log("This is req"+(req.body));
  var result = (JSON.parse(JSON.stringify(req.body)));

  db.Web_content.update(
    { announcement: result.announcement },
    { where: { AccountId: result.AccountId } }
  ).then(function (data) {
    // console.log("This is .then");
    res.send(data)
  }).catch(function (err) {
    console.log(err);
    if (err)
      console.log(err);
  })
});

// UPDATE Route for Hours
// router.put("/:bizname/config/hours", function (req, res) {
//   // console.log("This is req"+(req.body));
//   var result = (JSON.parse(JSON.stringify(req.body)));

//   db.Web_content.update(
//     { start_day: result.announcement },
//     { where: { AccountId: result.AccountId } }
//   ).then(function (data) {
//     // console.log("This is .then");
//     res.send(data)
//   }).catch(function (err) {
//     console.log(err);
//     if (err)
//       console.log(err);
//   })
// });

// Create Route for Hours
// router.post("/:bizname/config/hours", function (req, res) {
//   // console.log("This is req"+(req.body));
//   var result = (JSON.parse(JSON.stringify(req.body)));

//   db.Web_content.create(
//     { announcement: result.announcement },
//     { where: { AccountId: result.AccountId } }
//   ).then(function (data) {
//     // console.log("This is .then");
//     res.send(data)
//   }).catch(function (err) {
//     console.log(err);
//     if (err)
//       console.log(err);
//   })
// });


module.exports = router;