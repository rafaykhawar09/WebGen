


INSERT INTO privilege (priv_name, web, menu,menu_print, reservation_setup,reservation_view) VALUES ('Owner',true,true,true,true,true);
INSERT INTO privilege (priv_name, web, menu,menu_print, reservation_setup,reservation_view) VALUES ('Web',true,false,false,false,false);
INSERT INTO privilege (priv_name, web, menu,menu_print, reservation_setup,reservation_view) VALUES ('Menus',false,true,true,false,false);
INSERT INTO privilege (priv_name, web, menu,menu_print, reservation_setup,reservation_view) VALUES ('Reservation',false,false,true,true,true);



INSERT INTO role (role_name,privilege_id) VALUES ('Owner',1);
INSERT INTO role (role_name,privilege_id) VALUES ('Web Design',2);
INSERT INTO role (role_name,privilege_id) VALUES ('Chef',3);
INSERT INTO role (role_name,privilege_id) VALUES ('Hostess',4);

