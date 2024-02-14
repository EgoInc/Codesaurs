from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
from db.models.course import Course  # Импортируем модель Course из базы данных

app = FastAPI()


# Создаем класс для данных о новом курсе
class CourseCreate(BaseModel):
    name: str
    short_description: str
    description: str
    imageurl: str
    duration: int
    price: int
    language: str
    level: int
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
    level: int
    stages: str
    practice_description: str
    max_score: int
    views: int


# Создаем маршрут для добавления нового курса
@app.post("/courses/")
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
@app.get("/courses/{course_id}", response_model=CourseResponse)
async def get_course(course_id: int):
    course = Course.get_or_none(id=course_id)
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    return CourseResponse(**course.__dict__)

# Создаем маршрут для увеличения количества просмотров курса
@app.put("/courses/{course_id}/increment-views/", response_model=CourseResponse)
async def increment_course_views(course_id: int):
    course = Course.get_or_none(id=course_id)
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    course.views += 1
    course.save()
    return CourseResponse(**course.__dict__)

# Создаем маршрут для поиска курса по названию
@app.get("/courses/")
async def search_course_by_name(name: str):
    # Ищем курсы, у которых название содержит указанную строку
    courses = Course.select().where(Course.name.contains(name))
    if not courses:
        raise HTTPException(status_code=404, detail="No courses found with the given name")
    return [CourseResponse(**course.__dict__) for course in courses]

# Создаем маршрут для вывода курсов с фильтрацией и сортировкой
@app.get("/returnCourses/")
async def return_courses(
    sort_by: Optional[str] = None,
    language: Optional[str] = None,
    level: Optional[str] = None,
    min_price: Optional[int] = None,
    max_price: Optional[int] = None,
    duration: Optional[int] = None,
    amount: Optional[int] = 10
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
        if sort_by == "name":
            query = query.order_by(Course.name)
        elif sort_by == "views":
            query = query.order_by(Course.views)
        elif sort_by == "price":
            query = query.order_by(Course.price)

    # Получаем список курсов с учетом фильтров и сортировки, ограничиваем результат первыми 10ю курсами
    courses = query.limit(amount)

    return [CourseResponse(**course.__dict__) for course in courses]