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
app.get('/rolesandpriv', function (req, res) {
  db.Role.findAll({
    include: [db.Privilege]
  }).then(data => {
    res.json(data);
  })
})
app.get('/seeding', (req, res) => {
  db.Privilege.bulkCreate(
    [{
      priv_name: "Owner",
      manage_user: true,
      design_web: true,
      manage_menu: true,
      view_print_menu: true,
      setup_reservation: true,
      view_reservation: true
    },
    {
      priv_name: "Web Design",
      manage_user: false,
      design_web: true,
      manage_menu: false,
      view_print_menu: false,
      setup_reservation: false,
      view_reservation: false
    },
    {
      priv_name: "Chef",
      manage_user: false,
      design_web: false,
      manage_menu: true,
      view_print_menu: true,
      setup_reservation: false,
      view_reservation: false
    },
    {
      priv_name: "Hostess",
      manage_user: false,
      design_web: false,
      manage_menu: false,
      view_print_menu: true,
      setup_reservation: true,
      view_reservation: true
    }],
  ).then(function (dbPrivilege) {
    console.log(dbPrivilege);


    db.Role.bulkCreate(
      [{
        role_name: "Owner",
        PrivilegeId: 1
      },
      {
        role_name: "Web",
        PrivilegeId: 2
      },
      {
        role_name: "Chef",
        PrivilegeId: 3
      },
      {
        role_name: "Hostess",
        PrivilegeId: 4
      }]
    ).then(function (dbRole) {
      console.log(dbRole);
    });
  })

  db.Menu_category.bulkCreate([
    { category_name: "None" },
    { category_name: "Breakfast" },
    { category_name: "Lunch" },
    { category_name: "Dinner" },
    { category_name: "Specials" },
    { category_name: "Happy Hour" }
  ]).then(function (dbPrivilege) {
    console.log(dbPrivilege);

  });

  db.Menu_sub_category.bulkCreate([
    { sub_category_name: "Appetizer", sort: 1 },
    { sub_category_name: "Eggs", sort: 1 },
    { sub_category_name: "Pancakes & Waffles", sort: 2 },
    { sub_category_name: "Burgers", sort: 4 },
    { sub_category_name: "Sandwiches", sort: 3 },
    { sub_category_name: "Entrees", sort: 5 },
    { sub_category_name: "Beverages", sort: 99 },
    { sub_category_name: "Meat & Poultry", sort: 9 },
    { sub_category_name: "Pasta", sort: 7 },
    { sub_category_name: "Seafood", sort: 8 },
    { sub_category_name: "Vegetables", sort: 6 },
    { sub_category_name: "Desserts", sort: 30 },
    { sub_category_name: "Specials", sort: 25 },
    { sub_category_name: "Soup & Salad", sort: 2 }
  ])

    .then(function (dbPrivilege) {
      console.log(dbPrivilege);
      res.send('seeded');
    });

  db.Area.bulkCreate([
    { area_name: "Dining Room" },
    { area_name: "Lounge" },
    { area_name: "Patio" },
  ]).then(function (dbArea) {
    console.log(dbArea);
  });
})

app.get('/secondseed', (req, res) => {
  db.Account.create(
    {
      account_owner: "Joe",
      business_type: "Restaurant",
      company_name: "Joe's Salmon House",
      address: "123 Main Street, Seattle, WA  98101",
      phone: "206.555.1212",
      route: "joes"
    }
  ).then(function (dbAccount) {
    console.log(dbAccount);

    db.User.create(
      {
        email: "Joe",
        name: "Joe Blow",
        password: "password",
        AccountId: 1,
        RoleId: 1
      }
    ).then(function (dbUser) {
      console.log(dbUser);
      // });

      // this one doesn't work - need to figure out how to load a time into the database
      db.Hours.create(
        {
          start_day: "Monday",
          end_day: "Sunday",
          open: "11:00 am",
          close: "10:00 pm",
          AccountId: 1
        }
    ,
      ).then(function (dbHours) {
        console.log(dbHours);

        // });


        // this one is good
        db.Web_content.create(
          {
            color_scheme: "Red",
            description: "Welcome to my Restaurant",
            announcement: "Today's Specials are Salmon Stuffed with Spinach",
            our_story: true,
            our_story_text: "Our story starts in the a small town up in the hills of northern Italy...",
            advance_reservation_limit: 90,
            AccountId: 1
          }).then(function (dbWeb) {
            console.log(dbWeb);

            // });


            db.Picture.bulkCreate([
              {
                hero_image_url: "https://res.cloudinary.com/crunchy/image/upload/v1579900426/zfcoy0cweksi2zdlhzqk.jpg",
                logo_url: "https://res.cloudinary.com/crunchy/image/upload/v1579899905/ehtlcxaune0yn29zl3ew.png",
                story_background_url: "https://res.cloudinary.com/crunchy/image/upload/v1579908041/keigjw8t9b7zbx6wnyow.jpg",
                story_pic1_url: "https://res.cloudinary.com/crunchy/image/upload/v1579908048/cqzmowflqmox4tudhytk.jpg",
                story_pic2_url: "https://res.cloudinary.com/crunchy/image/upload/v1579908056/al9cj7xr8hxcriiidmv5.jpg",
                WebContentId: 1
              }
            ]).then(function (dbPics) {
              console.log(dbPics);
              // });


              // // This one is good
              db.Menu.bulkCreate([
                {
                  menu_item: "Prime Ribeye",
                  item_description: "Boneless ribeye grilled to perfection.",
                  price: 55,
                  optional_price: 0,
                  gluten_free_ind: false,
                  vegan_ind: false,
                  vegetarian_ind: false,
                  AccountId: 1,
                  MenuCategoryId: 4,
                  MenuSubCategoryId: 8
                },
                {
                  menu_item: "Denver Omelette",
                  item_description: "Three egg omelette with ham, bacon, tomatoes & bell peppers",
                  price: 13,
                  optional_price: 0,
                  gluten_free_ind: false,
                  vegan_ind: false,
                  vegetarian_ind: false,
                  AccountId: 1,
                  MenuCategoryId: 2,
                  MenuSubCategoryId: 2
                },
                {
                  menu_item: "Deluxe Burger",
                  item_description: "One third pound of our special ground beef blend topped with bacon and Tilamook cheddar.",
                  price: 9.50,
                  optional_price: 0, 
                  gluten_free_ind: false,
                  vegan_ind: false,
                  vegetarian_ind: false,
                  AccountId: 1,
                  MenuCategoryId: 3,
                  MenuSubCategoryId: 2
                }
              ]).then(function (dbMenu) {
                console.log(dbMenu);
                res.send('seeding done')

              });
            });
          });
      });
    });
  });

})
const htmlRoutes = require('./controllers/htmlController');
app.use(htmlRoutes)
const accountController = require("./controllers/accountController");
app.use(accountController)
const configPageController = require("./controllers/configPageController");
app.use(configPageController)
const webController = require("./controllers/webcontroller");
app.use(webController)
const pictureController = require("./controllers/pictureController");
app.use(pictureController)
const userController = require("./controllers/userController");
app.use(userController)
const menuController = require("./controllers/menuController");
app.use(menuController);





// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});