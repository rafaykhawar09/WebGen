


INSERT INTO privilege (priv_name, manage_user,design_web, manage_menu,view_print_menu, setup_reservation,view_reservation) VALUES ('Owner',true,true,true,true,true,true);
INSERT INTO privilege (priv_name, manage_user,design_web, manage_menu,view_print_menu, setup_reservation,view_reservation) VALUES ('Web',false,true,false,false,false,false);
INSERT INTO privilege (priv_name, manage_user,design_web, manage_menu,view_print_menu, setup_reservation,view_reservation) VALUES ('Menus',false,false,true,true,false,false);
INSERT INTO privilege (priv_name, manage_user,design_web, manage_menu,view_print_menu, setup_reservation,view_reservation) VALUES ('Reservation',false,false,false,true,true,true);



INSERT INTO role (role_name,privilege_id) VALUES ('Owner',1);
INSERT INTO role (role_name,privilege_id) VALUES ('Web Design',2);
INSERT INTO role (role_name,privilege_id) VALUES ('Chef',3);
INSERT INTO role (role_name,privilege_id) VALUES ('Hostess',4);

