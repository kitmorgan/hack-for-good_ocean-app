BEGIN TRANSACTION;
DROP TABLE IF EXISTS beaches, events, event_users CASCADE;

CREATE TABLE beaches(
beach_id SERIAL,
img_link varchar(500) NOT NULL,
beach_name varchar(250) NOT NULL,
location varchar(500) NOT NULL,
CONSTRAINT pk_beach PRIMARY KEY (beach_id));

CREATE TABLE events(
event_id SERIAL,
name varchar(250) NOT NULL,
description varchar (500),
date date NOT NULL,
beach_id int NOT NULL,
CONSTRAINT pk_events PRIMARY KEY (event_id),
CONSTRAINT fk_beachId FOREIGN KEY (beach_id) REFERENCES beaches (beach_id));

CREATE TABLE event_users(
event_user_id SERIAL,
event_id int NOT NULL,
email varchar(250) NOT NULL,
CONSTRAINT pk_event_user PRIMARY KEY (event_user_id),
CONSTRAINT fk_event_id FOREIGN KEY (event_id) REFERENCES events (event_id));


INSERT INTO beaches VALUES ('https://www.beach-vacation.com/wp-content/uploads/2022/01/myrtle-beach-vacation.jpg', 'Myrtle Beach', 'Florida');
INSERT INTO beaches VALUES ('https://www.worldatlas.com/r/w768/upload/bc/ac/79/shutterstock-1803023797.jpg', 'Panama City Beach', 'Florida');
INSERT INTO beaches VALUES ('https://assets3.thrillist.com/v1/image/2990932/1200x600/scale;', 'Cape May Beach', 'New Jersey');
INSERT INTO beaches VALUES ('https://www.visitcalifornia.com/sites/visitcalifornia.com/files/VC_California101_VeniceBeach_Stock_RF_638340372_1280x640.jpg', 'Venice Beach', 'California');
INSERT INTO beaches VALUES ('https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_640,q_75,w_1000/https://assets.simpleviewcms.com/simpleview/image/upload/v1/clients/ftlauderdale/AJR_FTL_Beach_0364_1__02d4d0a7-c538-42dc-ae3d-89f575ba4bf8.png', 'Fort Lauderdale Beach', 'Florida');
INSERT INTO beaches VALUES ('https://www.exp1.com/blog/wp-content/uploads/sites/7/2020/08/Santa-Monica-Pier-e1597077705511-1024x635.jpg', 'Santa Monica Beach', 'California');
INSERT INTO beaches VALUES ('https://assets3.thrillist.com/v1/image/2991681/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70', 'Ocean City Beach', 'Maryland');
INSERT INTO beaches VALUES ('https://absearesorts.com/wp-content/uploads/2020/06/pleasure-pier.jpg', 'Galveston Beach', 'Texas');
INSERT INTO beaches VALUES ('https://ourgulfshoresvacation.com/wp-content/uploads/2017/04/welcome-to-paradise.jpg', 'Gulf Shores Beach', 'Alabama');

INSERT INTO events VALUES ('Galveston Beach','Help keep our Texas beaches clean!', '2022-08-22', 8);
INSERT INTO events VALUES ('Santa Monica Beach','Join us this Saturday for a Santa Monica Beach clean-up', '2022-08-17', 6);
INSERT INTO events VALUES ('Cape May Beach','Come down to the shore for our community clean-up day', '2022-08-15', 3);
INSERT INTO events VALUES ('Panama City Beach','Beautifying the most beautiful beach in the world', '2022-08-24', 2);

INSERT INTO event_users VALUES (1, 'hakeem@gmail.com');
INSERT INTO event_users VALUES (1, 'kit@gmail.com');
INSERT INTO event_users VALUES (1, 'erasmus@gmail.com');
INSERT INTO event_users VALUES (1, 'kongyue@gmail.com');
INSERT INTO event_users VALUES (1, 'adam@gmail.com');
INSERT INTO event_users VALUES (1, 'serref@gmail.com');
INSERT INTO event_users VALUES (1, 'jen@gmail.com');
INSERT INTO event_users VALUES (1, 'pradeep@gmail.com');


COMMIT;