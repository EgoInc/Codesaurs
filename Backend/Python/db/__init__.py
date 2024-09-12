import sys
import os

# Добавляем путь к папке db в sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), 'models')))

from databasedef import database
from course import Course
from courselesson import CourseLesson
from student import Student
from studentcourse import StudentCourse
from studentsrespond import StudentRespond
from task import Task
from teacher import Teacher

database.connect()

database.create_tables([Course, CourseLesson, Student, StudentCourse, StudentRespond, Task, Teacher])

