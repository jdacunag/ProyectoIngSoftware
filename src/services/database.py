from motor.motor_asyncio import AsyncIOMotorClient
from models import Task
from bson import ObjectId

uri = "mongodb+srv://admin0:heqVN5oxBkRFdZRj@cluster0.3libabt.mongodb.net/?retryWrites=true&w=majority"
client = AsyncIOMotorClient(uri)
database = client.task_database
collection = database.tasks

async def get_one_task_id(id: str):
    task = await collection.find_one({'_id':ObjectId(id)})
    if task is not None:
       
        return task
    # If task is not found, return None or raise an exception, depending on your preference.
    return None  # or you can raise an HTTPException here with a 404 status

async def get_one_task_title(title: str):
    task = await collection.find_one({'title': title})
    return task

async def get_all_tasks():
    try:
        tasks = []
        cursor = collection.find({})
        async for document in cursor:
            tasks.append(Task(**document))
        return tasks
    except Exception as e:
        return f'get_all_tasks Query Error: {e}'

async def create_task(task):
    try:
        new_task = await collection.insert_one(task)
        created_task = await collection.find_one({'_id': new_task.inserted_id})
        return created_task
    except:
        return None

async def update_task(id: str, data):

        task = {k:v for k, v in data.dict().items() if v is not None}
        print(task)
        await collection.update_one({'_id': ObjectId(id)}, {'$set': task})
        document = await collection.find_one({'_id': ObjectId(id)})
        return document


async def delete_task(id: str):
    try:
        await collection.delete_one({'_id': ObjectId(id)})
        return True
    except:
        return False