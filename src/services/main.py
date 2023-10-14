from fastapi import FastAPI
from database import *
from models import Task
from fastapi import HTTPException

app = FastAPI()

@app.get('/')
def welcome():
    return {'message': 'Default welcome message'}

@app.get('/tasks')
async def get_tasks():
    tasks = await get_all_tasks()
    return tasks

@app.post('/tasks', response_model=Task)
async def save_task(task: Task):

    found_task = await get_one_task_title(task.title)

    if found_task:
        raise HTTPException(409, "Task already exists")
    
    response = await create_task(task.model_dump())
    if response:
        return response
    raise HTTPException(400, 'Something went wrong')

@app.get('/tasks/{id}')
async def get_task():
    return 'single task'

@app.put('/tasks/{id}')
async def update_task():
    return 'updating task'

@app.delete('/tasks/{id}')
async def delete_task():
    return 'deleting task'