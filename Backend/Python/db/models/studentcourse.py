from peewee import *
from databasedef import BaseModel
from course import Course
from student import Student

class StudentCourse(BaseModel):
    id = AutoField(primary_key=True)
    student_id = ForeignKeyField(Student, related_name="students")
    course_id = ForeignKeyField(Course, related_name="course")
    start_date = DateField(null=False)
    progress = IntegerField(null=False, default=0)
    score = IntegerField(null=False, default=0)