from motor.motor_asyncio import AsyncIOMotorClient
from models import *
from bson import ObjectId

uri = "mongodb+srv://admin0:heqVN5oxBkRFdZRj@cluster0.3libabt.mongodb.net/?retryWrites=true&w=majority"
client = AsyncIOMotorClient(uri)
database = client.api_database
#collection = database.tasks

async def get_one_task_id(id: str):
    collection = database.tasks
    task = await collection.find_one({'_id':ObjectId(id)})
    if task is not None:     
        return task
    return None  

async def get_one_task_title(title: str):
    collection = database.tasks
    task = await collection.find_one({'title': title})
    return task

async def get_all_tasks():
    collection = database.tasks
    try:
        tasks = []
        cursor = collection.find({})
        async for document in cursor:
            tasks.append(Task(**document))
        return tasks
    except Exception as e:
        return f'get_all_tasks Query Error: {e}'

async def create_task(task):
    collection = database.tasks
    try:
        new_task = await collection.insert_one(task)
        created_task = await collection.find_one({'_id': new_task.inserted_id})
        return created_task
    except:
        return None

async def update_task(id: str, data):
        collection = database.tasks

        task = {k:v for k, v in data.dict().items() if v is not None}
        print(task)
        await collection.update_one({'_id': ObjectId(id)}, {'$set': task})
        document = await collection.find_one({'_id': ObjectId(id)})
        return document


async def delete_task(id: str):
    collection = database.tasks
    try:
        await collection.delete_one({'_id': ObjectId(id)})
        return True
    except:
        return False
    
async def getUser(user:UpdateUser):
    collection = database.users
    try:
        query = {'username': user.username, 'password': user.password}
        user = await collection.find_one(query)
        if user is not None:
            return user
        return None
    except:
        return None
    
async def createUser(user: User):
    collection = database.users
    try:
        newUser = await collection.insert_one(user)
        createUser = await collection.find_one({'_id': newUser.inserted_id})
        return createUser
    except:
        return None        