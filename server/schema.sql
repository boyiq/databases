CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  roomname TEXT
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username TEXT
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  content TEXT,
  room_id INT,
  user_id INT,
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

