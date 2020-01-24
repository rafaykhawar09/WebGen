var db = require("../models");

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
       [ {
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
    { category_name: "None"},
    { category_name: "Breakfast"},
    { category_name: "Lunch"},
    { category_name: "Dinner"},
    { category_name: "Specials"},
    { category_name: "Happy Hour"}
],
).then(function (dbPrivilege) {
    console.log(dbPrivilege);

});

db.Menu_sub_category.bulkCreate([
    { sub_category_name: "Appetizer"},
    { sub_category_name: "Eggs"},
    { sub_category_name: "Pancakes & Waffles"},
    { sub_category_name: "Burgers"},
    { sub_category_name: "Sandwiches"},
    { sub_category_name: "Entres"},
    { sub_category_name: "Beverages"},
    { sub_category_name: "Meat & Poultry"},
    { sub_category_name: "Pasta"},
    { sub_category_name: "Seafood"},
    { sub_category_name: "Vegetables"},
    { sub_category_name: "Desserts"},
    { sub_category_name: "Specials"},
    { sub_category_name: "Soup & Salad"}
],
// db.Web_content.create({
//     logo_url:"http://res.cloudinary.com/crunchy/image/upload/v1579900426/zfcoy0cweksi2zdlhzqk.jpg",
//     color_scheme: "red",
//     AccountId:1

// })
)

.then(function (dbPrivilege) {
    console.log(dbPrivilege);

});
