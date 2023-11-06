from fastapi import APIRouter
from dbGraduate import *
from models import Graduate, UpdateGraduate
from fastapi import HTTPException

Graduates = APIRouter()

@Graduates.get('/graduate')
async def get_Graduates():
    Graduate = await get_all_graduateds()
    return Graduate

@Graduates.post('/graduate', response_model=Graduate)
async def save_Graduate(Graduate: Graduate):

    found_task = await get_one_Graduate_Byname(Graduate.title)

    if found_task:
        raise HTTPException(409, "Task already exists")
    
    response = await create_Graduate(Graduate.dict())
    if response:
        return response
    raise HTTPException(400, 'Something went wrong')

@Graduates.get('/graduate/{id}', response_model=Graduate)
async def get_Graduate(id: str):
    task = await get_one_Graduate_Byid(id)
    if task:
        return task    
    raise HTTPException(404, f'Task with id {id} not found')