from peewee import *
from databasedef import BaseModel
from course import Course
from teacher import Teacher

class CourseLesson(BaseModel):
    id = AutoField(primary_key=True)
    course_id = ForeignKeyField(Course, related_name="courselessons")
    name = CharField(null=False)
    description = TextField(null=False)
    date = TimestampField(null=False)
    teacher = ForeignKeyField(Teacher, related_name="teachers")
    record_url = TextField()