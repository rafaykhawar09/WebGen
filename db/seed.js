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