var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
app.get('/rolesandpriv',function(req,res){
  db.Role.findAll({
    include:[db.Privilege]
  }).then(data=>{
    res.json(data);
  })
})
const htmlRoutes = require('./controllers/htmlController');
app.use(htmlRoutes)
const userController = require("./controllers/userController");
app.use(userController)


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});