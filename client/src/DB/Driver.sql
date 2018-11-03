-- Database Creation
CREATE DATABASE Fellowtraveler_db;

USE Fellow traveler_db;


-- Table Creation for rider
CREATE TABLE Rider(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
Rider_name VARCHAR(50),
date TIMESTAMP);
-- Table Creation driver
CREATE TABLE Driver(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
Driver_name VARCHAR(50),
Driver-EmailAdd VARCHAR(50),
Driver-Phone VARCHAR(50),
date TIMESTAMP);