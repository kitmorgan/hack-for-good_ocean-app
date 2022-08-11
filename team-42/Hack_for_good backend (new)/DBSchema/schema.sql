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

COMMIT;