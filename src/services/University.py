from fastapi import APIRouter
from dbuniversity import *
from models import University, UpdateUniversity
from fastapi import HTTPException

Universities = APIRouter()

@Universities.get('/University')
async def get_Universitys():
    University = await get_all_universities()
    return University

@Universities.post('/University', response_model=University)
async def save_University(University: University):

    found_task = await get_one_University_Byname(University.name)

    if found_task:
        raise HTTPException(409, "Task already exists")
    
    response = await create_University(University.dict())
    if response:
        return response
    raise HTTPException(400, 'Something went wrong')

@Universities.get('/Corse/{id}', response_model=University)
async def get_University(id: str):
    task = await get_one_University_Byid(id)
    if task:
        return task    
    raise HTTPException(404, f'Task with id {id} not found')