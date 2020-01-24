var db = require("../models");

// this one works
// db.Hours.bulkCreate(
//     [{
//         star: "Owner",
//         manage_user: true,
//         design_web: true,
//         manage_menu: true,
//         view_print_menu: true,
//         setup_reservation: true,
//         view_reservation: true
//     },
//     {
//         priv_name: "Web Design",
//         manage_user: false,
//         design_web: true,
//         manage_menu: false,
//         view_print_menu: false,
//         setup_reservation: false,
//         view_reservation: false
//     },
//     {
//         priv_name: "Chef",
//         manage_user: false,
//         design_web: false,
//         manage_menu: true,
//         view_print_menu: true,
//         setup_reservation: false,
//         view_reservation: false
//     },
//     {
//         priv_name: "Hostess",
//         manage_user: false,
//         design_web: false,
//         manage_menu: false,
//         view_print_menu: true,
//         setup_reservation: true,
//         view_reservation: true
//     }],
// ).then(function (dbPrivilege) {
//     console.log(dbPrivilege);

// this one works
//     db.Role.bulkCreate(
//        [ {
//             role_name: "Owner",
//             PrivilegeId: 1
//         },
//         {
//             role_name: "Web",
//             PrivilegeId: 2
//         },
//         {
//             role_name: "Chef",
//             PrivilegeId: 3
//         },
//         {
//             role_name: "Hostess",
//             PrivilegeId: 4
//         }]
//     ).then(function (dbRole) {
//         console.log(dbRole);
//     });
// })


// this one doesn't work - need to figure out how to load a time into the database
// db.Hours.create(
//     { start_day: "Monday",
//     end_day: "Sunday",
//     open: "11:00:00",
//     close: "22:00:00",
//     AccountId: 1}
// ,
// ).then(function (dbHours) {
//     console.log(dbHours);

// });


// this one is good
// db.Web_content.create(
//     { color_scheme: "Red",
//     description: "Welcome to my Restaurant",
//     announcement: "Today's Specials are Salmon Stuffed with Spinach",
//     our_story: true,
//     our_story_text: "Our story starts in the a small town up in the hills of northern Italy...",
//     advance_reservation_limit: 90,
//     AccountId: 1
// }).then(function (dbWeb) {
//     console.log(dbWeb);

// });


// This one is good
// db.Menu.bulkCreate([
//     { menu_item: "Prime Ribeye",
//     item_description: "Boneless ribeye grilled to perfection.",
//     price: 55,
//     optional_price: 0,
//     gluten_free_ind: false,
//     vegan_ind: false,
//     vegetarian_ind: false,
//     AccountId: 1,
//     MenuCategoryId: 4,
//     MenuSubCategoryId: 8},
//     { menu_item: "Denver Omelette",
//     item_description: "Three egg omelette with ham, bacon, tomatoes & bell peppers",
//     price: 13,
//     optional_price: 0,
//     gluten_free_ind: false,
//     vegan_ind: false,
//     vegetarian_ind: false,
//     AccountId: 1,
//     MenuCategoryId: 2,
//     MenuSubCategoryId: 2},
//     { menu_item: "Deluxe Burger",
//     item_description: "One third pound of our special ground beef blend topped with bacon and Tilamook cheddar.",
//     price: 9.50,
//     optional_price: 0,
//     gluten_free_ind: false,
//     vegan_ind: false,
//     vegetarian_ind: false,
//     AccountId: 1,
//     MenuCategoryId: 3,
//     MenuSubCategoryId: 2},
// ]).then(function (dbMenu) {
//     console.log(dbMenu);

// });

    db.Area.bulkCreate([ 
        {area_name: "Dining Room"},
        {area_name: "Lounge"},
        {area_name: "Patio"},
    ]).then(function (dbArea) {
        console.log(dbArea);
    });

