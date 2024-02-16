import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'db', 'models')))

from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel
from course import Course  # Импортируем модель Course из базы данных

router = APIRouter()


# Создаем класс для данных о новом курсе
class CourseCreate(BaseModel):
    name: str
    short_description: str
    description: str
    imageurl: str
    duration: int
    price: int
    language: str
    level: str
    stages: str
    practice_description: str
    max_score: int


class CourseResponse(BaseModel):
    id: int
    name: str
    short_description: str
    description: str
    imageurl: str
    duration: int
    price: int
    language: str
    level: str
    stages: str
    practice_description: str
    max_score: int
    views: int


def get_list_of_courses(courses):
    list_of_courses = []
    for course in courses:
        course_response = CourseResponse(
            id=course.id,
            name=course.name,
            short_description=course.short_description,
            description=course.description,
            imageurl=course.imageurl,
            duration=course.duration,
            price=course.price,
            language=course.language,
            level=course.level,
            stages=course.stages,
            practice_description=course.practice_description,
            max_score=course.max_score,
            views=course.views
        )
        list_of_courses.append(course_response)
    return list_of_courses


# Создаем маршрут для добавления нового курса
@router.post("/create")
async def create_course(course_data: CourseCreate):
    # Создайте новый курс с использованием данных, полученных от клиента
    Course.create(
        name=course_data.name,
        short_description=course_data.short_description,
        description=course_data.description,
        imageurl=course_data.imageurl,
        duration=course_data.duration,
        price=course_data.price,
        language=course_data.language,
        level=course_data.level,
        stages=course_data.stages,
        practice_description=course_data.practice_description,
        max_score=course_data.max_score
    )
    return {"message": "Course has been created"}


# Создаем маршрут для получения информации о курсе по его ID
@router.get("/{course_id}", response_model=CourseResponse)
async def get_course(course_id: int):
    course = Course.get_or_none(Course.id == course_id)
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    return course


# Создаем маршрут для увеличения количества просмотров курса
@router.put("/{course_id}/increment-views")
async def increment_course_views(course_id: int):
    course = Course.get_or_none(Course.id == course_id)
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    course.views += 1
    course.save()
    return {"message": "View has been added"}


# Создаем маршрут для поиска курса по названию
@router.get("/search/")
async def search_course_by_name(name: str):
    # Ищем курсы, у которых название содержит указанную строку
    courses = Course.select().where(Course.name.contains(name))
    if not courses:
        raise HTTPException(status_code=404, detail="No courses found with the given name")
    courses_data = get_list_of_courses(courses)
    return courses_data


# Создаем маршрут для вывода курсов с фильтрацией и сортировкой
@router.get("/courses/returnCourses")
async def return_courses(
        sort_by: str = Query(None, description="Sort by", enum=["name", "views", "price"]),
        sort_order: str = Query("asc", description="Sort order", enum=["asc", "desc"]),
        language: str = Query(None, description="Chose language", enum=["rus", "eng"]),
        duration: int = Query(None, description="Chose duration"),
        level: str = Query(None, description="Chose difficulty level", enum=["low", "medium", "high"]),
        min_price: int = Query(None, description="Limits the minimum price"),
        max_price: int = Query(None, description="Limits the maximum price"),
        amount: int = Query(None, description="Limits the quantity")
):
    # Создаем запрос для выборки курсов
    query = Course.select()

    # Применяем фильтры
    if language:
        query = query.where(Course.language == language)
    if level:
        query = query.where(Course.level == level)
    if min_price:
        query = query.where(Course.price >= min_price)
    if max_price:
        query = query.where(Course.price <= max_price)
    if duration:
        query = query.where(Course.duration == duration)

    # Применяем сортировку
    if sort_by:
        if sort_order == "desc":
            if sort_by == "name":
                query = query.order_by(Course.name.desc())
            elif sort_by == "views":
                query = query.order_by(Course.views.desc())
            elif sort_by == "price":
                query = query.order_by(Course.price.desc())
        else:
            if sort_by == "name":
                query = query.order_by(Course.name)
            elif sort_by == "views":
                query = query.order_by(Course.views)
            elif sort_by == "price":
                query = query.order_by(Course.price)

    if amount is not None:
        courses = query.limit(amount)
    else:
        courses = query
    course_list = get_list_of_courses(courses)

    if not course_list:
        raise HTTPException(status_code=404, detail="No courses found")

    return course_list