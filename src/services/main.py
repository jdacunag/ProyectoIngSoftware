from fastapi import FastAPI
from task import tasks

app = FastAPI()

@app.get('/')
def welcome():
    return {'message': 'Default welcome message'}

app.include_router(tasks)