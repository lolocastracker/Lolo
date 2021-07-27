# from flask import Flask, json,request


class queries:
    def __init__(self, data):
        # data is the json file sent from the frontend to the backend
        self.data = data
        self.query = "BEGIN;"\
                    "INSERT INTO lolo_report(date) VALUES(2026-12-21 13:57:47);" \
                    "SET @id = LAST_INSERT_ID();" \
                    "INSERT INTO lolo_location(reportId, `long`, lat) VALUES (1, -74.138917,31.2823103);"\
                    "COMMIT;"
    def makeQuery(self):
        pass



'''
Store procedure

CREATE PROCEDURE addReport(
    IN dateP DATETIME,
    IN bodyP TEXT,
    IN addrP VARCHAR(200),
    IN lat DECIMAL(10,8),
    IN lng DECIMAL(11,8),
    IN imagePathP VARCHAR(200),
    IN locustTypeP VARCHAR(200)

BEGIN
    INSERT INTO lolo_report(body,date) VALUES(bodyP,dateP);
    SET @id = LAST_INSERT_ID();
    INSERT INTO lolo_location(reportId, `long`, lat) VALUES (@id, lng, lat);

END;

)




'''