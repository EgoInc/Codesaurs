from peewee import *
from .databasedef import BaseModel

class Course(BaseModel):
    id = AutoField(primary_key=True)
    name = CharField(null=False)
    short_description = CharField()
    description = CharField()
    imageurl = TextField(null=False, default="/static/no-photo.png")
    duration = IntegerField(null=False)
    price = IntegerField(null=False)
    language = CharField(choices=["rus", "eng"])
    level = CharField(choices=["low", "medium", "high"])
    stages = TextField()
    practice_description = TextField()
    max_score = IntegerField(null=False)
    views = IntegerField(null=False, default=0)