DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role VARCHAR(30) NOT NULL,
  manager VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  department VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE department (
  id INT AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO department (name)
VALUES ("Sales Lead");

INSERT INTO role (title, department)
VALUES ("Sales Lead", "Sales");

INSERT INTO role (title, department)
VALUES ("Salesperson", "Sales");

INSERT INTO role (title, department)
VALUES ("Lead Engineer", "Engineering");

INSERT INTO role (title, department)
VALUES ("Software Engineer", "Engineering");

INSERT INTO role (title, department)
VALUES ("Accountant", "Finance");

INSERT INTO role (title, department)
VALUES ("Legal Team Lead", "Legal");

INSERT INTO employee (first_name, last_name, role, manager)
VALUES ("John", "Doe", "Sales Lead", "Sales", 100000, "Ashley Rodriguez");

INSERT INTO employee (first_name, last_name, role, manager)
VALUES ("Mike", "Chan", "Salesperson", "Sales", 80000, "John Doe");

INSERT INTO employee (first_name, last_name, role)
VALUES ("Ashley", "Rodriguez", "Lead Engineer", "Engineering", 150000);

INSERT INTO employee (first_name, last_name, role, manager)
VALUES ("Kevin", "Tupik", "Software Engineer", "Engineering", 120000, "Ashley Rodriguez");

INSERT INTO employee (first_name, last_name, role)
VALUES ("Malia", "Brown", "Accountant", "Finance", 125000);

INSERT INTO employee (first_name, last_name, role)
VALUES ("Sarah", "Lourd", "Legal Team Lead", "Legal", 250000);

-- UPDATE music 
-- SET artist = "apple + fruits"
-- WHERE title = "lemonade";

-- DELETE FROM music 
-- WHERE artist = 'the Grump';

SELECT * FROM music