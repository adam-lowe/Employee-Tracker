DROP DATABASE IF EXISTS greatBay_DB;
CREATE DATABASE greatBay_DB;

USE greatBay_DB;

CREATE TABLE auctions(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  category VARCHAR(45) NOT NULL,
  starting_bid INT default 0,
  highest_bid INT default 0,
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