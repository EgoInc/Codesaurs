from models.databasedef import BaseModel
from peewee import *
from models.student import Student
from models.task import Task


class StudentRespond(BaseModel):
    id = AutoField(primary_key=True)
    student_id = ForeignKeyField(Student, related_name="responds")
    task_id = ForeignKeyField(Task, related_name="students")
    answer = TextField(null=False)
    answer_file = TextField()
    grade = IntegerField(null=False)
    comment = TextField()