from databasedef import BaseModel
from peewee import *
from courselesson import CourseLesson

class Task(BaseModel):
    id = AutoField(primary_key=True)
    lesson_id = ForeignKeyField(CourseLesson, related_name="homeworks")
    name = CharField(null=False)
    description = TextField(null=False)
    solution = TextField(null=False)
    answer = TextField(null=False)
    check = CharField(null=False, choices = ["auto", "manual"])
    points = IntegerField(null=False)