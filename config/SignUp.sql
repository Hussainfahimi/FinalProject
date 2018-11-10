-- Database Creation
CREATE DATABASE Fellowtraveler_db;

USE Fellowtraveler_db;

-- Table Creation for User

CREATE TABLE User(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
Username VARCHAR(100),
User_email VARCHAR (100),
User_password VARCHAR (15) Not Null,
date TIMESTAMP)


