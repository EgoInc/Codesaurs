from fastapi import FastAPI
from studentcourses.studentcourses import router as StudentCourseApp
from courses.courses import router as CourseApp
from students.students import router as StudentApp

app = FastAPI(title="Codesaurs Python Backend")

app.include_router(StudentCourseApp, prefix="/studentcourse")
app.include_router(CourseApp, prefix="/course")
app.include_router(StudentApp, prefix="/student")