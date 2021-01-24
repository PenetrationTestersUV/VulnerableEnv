CREATE DATABASE IF NOT EXISTS auth DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE auth;

CREATE TABLE IF NOT EXISTS users (
  id int(11) NOT NULL,
  username varchar(50) NOT NULL,
  password varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO users (id, username, password) VALUES (1, 'erick', '.amoamicrush123');