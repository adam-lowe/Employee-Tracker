DROP DATABASE IF EXISTS music_DB;

CREATE DATABASE music_DB;

USE music_DB;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name VARCHAR(30)
  PRIMARY KEY (id)
);

INSERT INTO music (title, artist, genre)
VALUES ("lemonade", "apple and the fruits", "fruit metal"), ("Coffee fragerance", "Adeliee da lee", "Jazz folk metal"), ("the lub of live", "Adeliee da lee", "country title music"), ("Rolling in the deep", "the Grump", "Scream Singing");

UPDATE music 
SET artist = "apple + fruits"
WHERE title = "lemonade";

DELETE FROM music 
WHERE artist = 'the Grump';

SELECT * FROM music