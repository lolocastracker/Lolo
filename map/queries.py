# from flask import Flask, json,request


class queries:
    def __init__(self, data):
        # data is the json file sent from the frontend to the backend
        self.data = data
        self.query = "BEGIN;"\
                    "INSERT INTO "
    def makeQuery(self):
        pass