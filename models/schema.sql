CREATE DATABASE devapp;

USE devapp;

CREATE TABLE links
    (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        technology VARCHAR(24) NOT NULL,
        author VARCHAR(50) NOT NULL,
        link VARCHAR(200) NOT NULL
    )
