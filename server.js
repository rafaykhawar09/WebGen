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
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

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
const accountController = require("./controllers/accountController");
app.use(accountController)
const configPageController = require("./controllers/configPageController");
app.use(configPageController)
const webController = require("./controllers/webController");
app.use(webController)
const pictureController = require("./controllers/pictureController");
app.use(pictureController)
const userController = require("./controllers/userController");
app.use(userController)
const menuController = require("./controllers/menuController");
app.use(menuController)




// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});