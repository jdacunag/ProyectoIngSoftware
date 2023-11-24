from fastapi import APIRouter
from database import *
from models import Task, UpdateTask
from fastapi import HTTPException

tasks = APIRouter()

@tasks.get('/tasks')
async def get_tasks():
    tasks = await get_all_tasks()
    return tasks

@tasks.post('/tasks', response_model=Task)
async def save_task(task: Task):

    found_task = await get_one_task_title(task.title)

    if found_task:
        raise HTTPException(409, "Task already exists")
    
    response = await create_task(task.dict())
    if response:
        return response
    raise HTTPException(400, 'Something went wrong')

@tasks.delete('/tasks/{id}')
async def remove_task(id: str):
    task = await delete_task(id)
    if task:
        return "eliminada de manera satisfactoria " 
    raise HTTPException(404, f'Task with id {id} not found')

@tasks.put('/tasks/{id}', response_model= Task)
async def update(id: str, task: UpdateTask):
    response = await update_task(id, task)
    if response:
        return response
    return 'updating task'

@tasks.get('/tasks/{id}', response_model=Task)
async def get_task(id: str):
    response = await get_one_task_id(id)
    if response:
        return response
    raise HTTPException(404, f"There is no task with the id {id}")