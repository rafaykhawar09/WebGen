var db = require("../models");

let acctId = 11;
let wcId = acctId

db.Account.create(
    {
        account_owner: "bill@gmail.com",
        business_type: "Restaurant",
        company_name: "Bill's Road House",
        address: "123 Center Street, Bellevue, WA  98004",
        phone: "206.555.3434",
        route: "roadhouse"
    }
).then(function (dbAccount) {
    console.log(dbAccount);

    db.User.create(
        {
            email: "bill"+acctId+"@gmail.com",
            name: "Bill Smith",
            password: "pass",
            AccountId: acctId,
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
                AccountId: acctId
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
                    announcement: "https://res.cloudinary.com/crunchy/image/upload/v1580066226/dsoxpprtwrh44dn1vb8j.png",
                    our_story: true,
                    our_story_text: "https://res.cloudinary.com/crunchy/image/upload/v1579900426/zfcoy0cweksi2zdlhzqk.jpg",
                    advance_reservation_limit: 90,
                    AccountId: acctId
                }).then(function (dbWeb) {
                    console.log(dbWeb);

                    // });


                    db.Picture.create(
                        {
                            hero_image_url: "https://res.cloudinary.com/crunchy/image/upload/v1579900426/zfcoy0cweksi2zdlhzqk.jpg",
                            logo_url: "https://res.cloudinary.com/crunchy/image/upload/v1580066226/dsoxpprtwrh44dn1vb8j.png",
                            story_background_url: "https://res.cloudinary.com/crunchy/image/upload/v1579908041/keigjw8t9b7zbx6wnyow.jpg",
                            story_pic1_url: "https://res.cloudinary.com/crunchy/image/upload/v1579908048/cqzmowflqmox4tudhytk.jpg",
                            story_pic2_url: "https://res.cloudinary.com/crunchy/image/upload/v1579908056/al9cj7xr8hxcriiidmv5.jpg",
                            WebContentId: dbWeb.id
                        }
                    ).then(function (dbPics) {
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
                                AccountId: acctId,
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
                                AccountId: acctId,
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
                                AccountId: acctId,
                                MenuCategoryId: 3,
                                MenuSubCategoryId: 2
                            },
                        ]).then(function (dbMenu) {
                            console.log(dbMenu);

                        });
                    });
                });
        });
    });
});
