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



-- -- create a addLocust procedure
-- DROP PROCEDURE IF EXISTS `lolo_db`.`addLocust`;
-- DELIMITER //
-- CREATE PROCEDURE addLocust(
--    IN reportId INT, 
--    IN locustType VARCHAR(200)
-- )
-- BEGIN
--    DECLARE _next TEXT DEFAULT NULL;
--    DECLARE _nextlen INT DEFAULT NULL;
--    -- for every locusts in the locustType string, check with the 
--    -- lolo_locust table, get its locustid, then put that in the lolo_locust_in_report table
--    -- assuming that the locust type we take in already exist in lolo_locust table
--    IF (locustType IS NOT NULL OR locustType <> '') THEN
--       iterator:
--       LOOP 
--          IF CHAR_LENGTH(TRIM(locustType))=0 OR locustType IS NULL THEN
--             LEAVE iterator;
--          END IF;
--          -- split the string and get the first item, and save the length of it 
--          SET _next = SUBSTRING_INDEX(locustType,",",1);
--          SET _nextlen = CHAR_LENGTH(_next); 
--          -- find the locustId in our lolo_locust table
--          SELECT @loid := locustId FROM lolo_locust WHERE type = _next;

--          INSERT INTO lolo_locust_in_report(`reportId`,`locustId`) VALUES (reportId, @loid); 
--          SET locustType = INSERT(locustType, 1, _nextlen+1, '');
--       END LOOP;
--    END IF;
-- END//
-- DELIMITER ;




#DROP PROCEDURE IF EXISTS `lolo_db`.`addReport`;
DELIMITER //

CREATE PROCEDURE addReport(
    IN dateP DATETIME,
    IN bodyP TEXT,
    IN addr VARCHAR(200),
    IN lat DECIMAL(10,8),
    IN lng DECIMAL(11,8),
    IN imagePath VARCHAR(200),
    IN locustType VARCHAR(200)
)
BEGIN
   DECLARE _next TEXT DEFAULT NULL;
   DECLARE _nextlen INT DEFAULT NULL;
   DECLARE loid INT DEFAULT NULL;

    INSERT INTO lolo_report(`body`,`date`) VALUES(bodyP,dateP);
    SET @id = LAST_INSERT_ID();
    INSERT INTO lolo_location(`reportId`, `address`,`long`, `lat`) VALUES (@id,addr, lng, lat);
    IF(imagePath IS NOT NULL OR imagePath <> '') THEN
      -- if an image is provided, then added that into the database    
      INSERT INTO lolo_image(`path`) VALUES (imagePath);
      SET @imgid = LAST_INSERT_ID();
      INSERT INTO lolo_image_in_report(reportId, imageId) VALUES (@id, @imgid);
   END IF;
   


   -- adding locustType
   -- for every locusts in the locustType string, check with the 
   -- lolo_locust table, get its locustid, then put that in the lolo_locust_in_report table
   -- assuming that the locust type we take in already exist in lolo_locust table
   IF (locustType IS NOT NULL OR locustType <> '') THEN
      iterator:
      LOOP 
         IF CHAR_LENGTH(TRIM(locustType))=0 OR locustType IS NULL THEN
            LEAVE iterator;
         END IF;
         -- split the string and get the first item, and save the length of it 
         SET _next = SUBSTRING_INDEX(locustType,",",1);
         SET _nextlen = CHAR_LENGTH(_next); 
         -- find the locustId in our lolo_locust table
         -- SELECT @loid := locustId FROM lolo_locust WHERE type = _next;
         SELECT locustId INTO loid FROM lolo_locust WHERE type = _next;

         INSERT INTO lolo_locust_in_report(`reportId`,`locustId`) VALUES (@id, loid); 
         SET locustType = INSERT(locustType, 1, _nextlen+1, '');
      END LOOP;
   END IF;
      
END//

DELIMITER ;
show procedure status WHERE Db='lolo_db';


