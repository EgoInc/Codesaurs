import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'db', 'models')))

from fastapi import APIRouter, HTTPException
from peewee import DoesNotExist
from student import Student

from pydantic import BaseModel

router = APIRouter()

class StudentIn(BaseModel):
    name: str
    last_name: str
    date_of_birth: str
    gender: str
    contact: str
    email: str
    image: str = ''
    parent_name: str
    parent_last_name: str
    parent_contact: str

class StudentOut(BaseModel):
    id: int
    name: str
    last_name: str
    date_of_birth: str
    gender: str
    contact: str
    email: str
    image: str
    parent_name: str
    parent_last_name: str
    parent_contact: str

@router.get("/{student_id}")
async def get_student(student_id: int):
    try:
        student = Student.get(Student.id == student_id)
        return student
    except DoesNotExist:
        raise HTTPException(status_code=404, detail="Student not found")

@router.post("/create")
async def create_student(student: StudentIn):
    try:
        new_student = Student.create(
            name=student.name,
            last_name=student.last_name,
            date_of_birth=student.date_of_birth,
            gender=student.gender,
            contact=student.contact,
            email=student.email,
            image=student.image,
            parent_name=student.parent_name,
            parent_last_name=student.parent_last_name,
            parent_contact=student.parent_contact
        )
        return new_student
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.put("/update/{student_id}")
async def update_student(student_id: int, student_data: dict):
    try:
        student = Student.get(Student.id == student_id)
        for key, value in student_data.items():
            setattr(student, key, value)
        student.save()
        return student.__dict__["__data__"]
    except DoesNotExist:
        raise HTTPException(status_code=404, detail="Student not found")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))