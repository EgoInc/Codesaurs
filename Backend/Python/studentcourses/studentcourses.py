import sys
import os

# Добавляем путь к папке db в sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'db', 'models')))

from fastapi import APIRouter, HTTPException
from course import Course
from student import Student
from studentcourse import StudentCourse
from datetime import datetime

router = APIRouter()

@router.post("/enroll/{student_id}/{course_id}")
async def enroll_student(student_id: int, course_id: int):
    try:
        student = Student.get(Student.id == student_id)
        course = Course.get(Course.id == course_id)
    except Student.DoesNotExist:
        raise HTTPException(status_code=404, detail=f"Error: Student with ID {student_id} does not exist.")
    except Course.DoesNotExist:
        raise HTTPException(status_code=404, detail=f"Error: Course with ID {course_id} does not exist.")

    existing_record = StudentCourse.select().where(
        (StudentCourse.student_id == student_id) &
        (StudentCourse.course_id == course_id)
    ).exists()

    if existing_record:
        raise HTTPException(status_code=400, detail="Student is already enrolled in the course.")

    StudentCourse.create(
        student_id=student,
        course_id=course,
        start_date=datetime.now(),
        progress=0,
        score=0
    )
    return {"message": "Student enrolled in the course successfully."}

@router.put("/add-lesson-visit/{student_course_id}/{count_of_lessons}")
async def add_lesson_visit(student_course_id: int, count_of_lessons: int):
    if count_of_lessons <= 0:
        raise HTTPException(status_code=400, detail=f"Error: Count of lessons to add {count_of_lessons} must be more than 0.")
    try:
        student_course = StudentCourse.get(StudentCourse.id == student_course_id)
    except StudentCourse.DoesNotExist:
        raise HTTPException(status_code=404, detail=f"Error: StudentCourse with ID {student_course_id} does not exist.")

    student_course.progress += count_of_lessons
    student_course.save()
    return {"message": f"Lesson visit added successfully. New progress: {student_course.progress}"}

@router.get("/get-progress/{student_id}/{course_id}")
async def get_student_course_progress(student_id: int, course_id: int):
    student_courses = StudentCourse.select().where(
        (StudentCourse.student_id == student_id) &
        (StudentCourse.course_id == course_id)
    )

    progress_data = []

    for student_course in student_courses:
        course = student_course.course_id
        progress_data.append({
            'name': course.name,
            'image': course.imageurl,
            'max_score': course.max_score,
            'start_date': student_course.start_date,
            'progress': student_course.progress,
            'score': student_course.score
        })

    return progress_data
