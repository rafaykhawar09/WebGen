var db = require("../models");

db.Privilege.create(
    {
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
    },
    ).then(function(dbPrivilege){
        console.log(dbPrivilege);
});

db.Role.create(
    {
    role_name: "Owner",
    PriviligeID: 1
    },
    {
    role_name: "Web",
    PriviligeID: 2
    },
    {
    role_name: "Chef",
    PriviligeID: 3
    },
    {
    role_name: "Hostess",
    PriviligeID: 4
    },
    ).then(function(dbRole){
    console.log(dbRole);
}); 