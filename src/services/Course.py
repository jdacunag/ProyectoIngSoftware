from fastapi import APIRouter
from dbCourse import *
from models import Course, UpdateCourse
from fastapi import HTTPException

Courses = APIRouter()

@Courses.get('/course')
async def get_Courses():
    Course = await get_all_Courses()
    return Course

@Courses.post('/course', response_model=Course)
async def save_Course(Course: Course):

    found_task = await get_one_Course_Byname(Course.title)

    if found_task:
        raise HTTPException(409, "Task already exists")
    
    response = await create_Course(Course.dict())
    if response:
        return response
    raise HTTPException(400, 'Something went wrong')

@Courses.get('/course/{id}', response_model=Course)
async def get_Course(id: str):
    task = await get_one_Course_Byid(id)
    if task:
        return task    
    raise HTTPException(404, f'Task with id {id} not found')