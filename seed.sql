DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name VARCHAR(30)
  PRIMARY KEY (id)
);

INSERT INTO music (first_name, last_name, title, department, salary, manager)
VALUES ("John", "Doe", "Sales Lead", "Sales", 100000, "Ashley Rodriguez");

INSERT INTO music (first_name, last_name, title, department, salary, manager)
VALUES ("Mike", "Chan", "Salesperson", "Sales", 80000, "Ashley Rodriguez");

INSERT INTO music (first_name, last_name, title, department, salary, manager)
VALUES ("Ashley", "Rodriguez", "Lead Engineer", "Engineering", 150000, "Ashley Rodriguez");

INSERT INTO music (first_name, last_name, title, department, salary, manager)
VALUES ("Kevin", "Tupik", "Software Engineer", "Engineering", 120000, "Ashley Rodriguez");

INSERT INTO music (first_name, last_name, title, department, salary, manager)
VALUES ("Malia", "Brown", "Accountant", "Finance", 125000, "Ashley Rodriguez");

INSERT INTO music (first_name, last_name, title, department, salary, manager)
VALUES ("Sarah", "Lourd", "Legal Team Lead", "Legal", 250000, "Ashley Rodriguez");

-- UPDATE music 
-- SET artist = "apple + fruits"
-- WHERE title = "lemonade";

-- DELETE FROM music 
-- WHERE artist = 'the Grump';

-- SELECT * FROM music