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


INSERT INTO beaches VALUES (null, 'Myrtle Beach', 'Florida');
INSERT INTO beaches VALUES (null, 'Panama City Beach', 'Florida');
INSERT INTO beaches VALUES (null, 'Cape May Beach', 'New Jersey');
INSERT INTO beaches VALUES (null, 'Venice Beach', 'California');
INSERT INTO beaches VALUES (null, 'Fort Lauderdale Beach', 'Florida');
INSERT INTO beaches VALUES (null, 'Santa Monica Beach', 'California');
INSERT INTO beaches VALUES (null, 'Ocean City Beach', 'Maryland');
INSERT INTO beaches VALUES (null, 'Galveston Beach', 'Texas');
INSERT INTO beaches VALUES (null, 'Gulf Shores Beach', 'Alabama');

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