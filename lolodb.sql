CREATE DATABASE IF NOT EXISTS lolo_db;
use lolo_db;

-- -- make user table
--  CREATE TABLE IF NOT EXISTS user(
-- 	userId INT NOT NULL AUTO_INCREMENT,
--     username VARCHAR(50) NOT NULL,
--     email VARCHAR (50) NOT NULL,
--     PRIMARY KEY (userid)
--  );

-- -- create thread table
-- -- this holds all the threads in the forum
-- CREATE TABLE IF NOT EXISTS thread(
-- 	threadId INT NOT NULL AUTO_INCREMENT,
--     title VARCHAR(100),
--     `date` DATETIME,
--     PRIMARY KEY (threadId)
-- );

-- -- create thread_subject table
-- -- this holds all the subject that user can tag their threads
--  CREATE TABLE IF NOT EXISTS thread_subject (
-- 	subjectId INT NOT NULL AUTO_INCREMENT,
--     username VARCHAR(50) NOT NULL,
--     PRIMARY KEY (subjectId)
--  );

-- -- create subject in thread
-- -- holds all the subjects that all threads are tagged under
-- CREATE TABLE IF NOT EXISTS subject_in_thread(
-- 	threadId INT NOT NULL,
--     subjectId INT NOT NULL,
--     FOREIGN KEY (threadId) REFERENCES thread(threadId),
--     FOREIGN KEY (subjectId) REFERENCES thread_subject(subjectId)
-- ); 
 
--  -- create message_in_thread
--  -- the content of the thread and its replies
--  CREATE TABLE IF NOT EXISTS message_in_thread(
-- 	`messageId` INT NOT NULL AUTO_INCREMENT,
--     `threadId` INT NOT NULL,
--     `body` TEXT,
--     `date` DATETIME,
--     PRIMARY KEY(messageId),
--     FOREIGN KEY(threadId) REFERENCES thread(threadId)
--  );
 
--  -- create user_in_message
--  -- hold info on which users create the message. If null, then 
--  -- it is anonymoys
--  CREATE TABLE IF NOT EXISTS user_in_message(
-- 	messageId INT NOT NULL,
--     userId INT,
--     FOREIGN KEY (messageId) REFERENCES message_in_thread(messageId),
--     FOREIGN KEY(userId) REFERENCES user(userId)
--  );

-- create report table
-- has all the reports that users make 
 CREATE TABLE IF NOT EXISTS lolo_report(
	`reportId` INT NOT NULL AUTO_INCREMENT,
    `body` TEXT,
    `date` DATETIME NOT NULL,
    PRIMARY KEY(reportId)
 );
 
 -- -- create user_in_report
 -- -- holds the users that make a report
 -- -- can be null/anonymous
 -- CREATE TABLE IF NOT EXISTS user_in_report(
	-- reportId INT NOT NULL,
 --    userId INT,
 --    FOREIGN KEY(reportId) REFERENCES report(reportId),
 --    FOREIGN KEY(userId) REFERENCES user(userId)
 -- );
 
 CREATE TABLE IF NOT EXISTS lolo_locust(
	`locustId` INT NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(20) NOT NULL,
    PRIMARY KEY(locustId)
 );
 
 
 CREATE TABLE IF NOT EXISTS lolo_locust_in_report (
	reportId INT NOT NULL,
   locustId INT NOT NULL,
   FOREIGN KEY (reportId) REFERENCES lolo_report(reportId),
   FOREIGN KEY (locustId) REFERENCES lolo_locust(locustId)
 );
 
 CREATE TABLE IF NOT EXISTS lolo_location(
	`reportId` INT NOT NULL,
    `address` VARCHAR(200),
    `long` DECIMAL(11,8) NOT NULL,
    `lat` DECIMAL(10,8) NOT NULL,
    FOREIGN KEY (reportId) REFERENCES lolo_report(reportId)
 );

 CREATE TABLE IF NOT EXISTS lolo_image(
    imageId INT NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(200) NOT NULL,
    PRIMARY KEY(imageId)
 );

 CREATE TABLE IF NOT EXISTS lolo_image_in_report(
    reportId INT NOT NULL,
    imageId INT NOT NULL,
    FOREIGN KEY(reportId) REFERENCES lolo_location(reportId),
    FOREIGN KEY(imageId) REFERENCES lolo_image(imageId)
 );
 

-- how to truncate table w/ foreign keys
-- SET FOREIGN_KEY_CHECKS = 0; 
-- TRUNCATE table $table_name; 
-- SET FOREIGN_KEY_CHECKS = 1;

-- count how many rows are in your table
-- SELECT COUNT(*) FROM table;

