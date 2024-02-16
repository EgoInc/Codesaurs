from peewee import *

database = MySQLDatabase(
    "codesaurs", user="root", password="G1o2l3d4", port=3306, host="localhost"
)

class BaseModel(Model):
    class Meta:
        database = database