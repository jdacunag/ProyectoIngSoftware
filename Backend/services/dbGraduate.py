from motor.motor_asyncio import AsyncIOMotorClient
from models import Graduate, UpdateGraduate
from bson import ObjectId

uri = "mongodb+srv://admin0:heqVN5oxBkRFdZRj@cluster0.3libabt.mongodb.net/?retryWrites=true&w=majority"
client = AsyncIOMotorClient(uri)
database = client.api_database


async def get_all_graduateds():
    collection = database.Graduate
    try:
        Graduateds = []
        cursor = collection.find({})
        async for document in cursor:
            Graduateds.append(Graduate(**document))
        return Graduateds
    except Exception as e:
        return f'get_all_tasks Query Error: {e}'

async def getGradute(UpdateGraduate:UpdateGraduate):
    collection = database.Graduate
    try:
        query = {'name': UpdateGraduate.name, 'universityId': UpdateGraduate.universityId, 'GraduateId': UpdateGraduate.GraduateId}
        Graduate = await collection.find_one(query)
        if Graduate is not None:
            return Graduate
        return None
    except:
        return None
    
async def create_Graduate(Graduate: Graduate):
    collection = database.Graduate
    try:
        new_Graduate = await collection.insert_one(Graduate)
        createGraduate = await collection.find_one({'_id': new_Graduate.inserted_id})
        return createGraduate
    except:
        return None
async def get_one_Graduate_Byid(id: str):
    collection = database.Graduate
    Graduate = await collection.find_one({'_id':ObjectId(id)})
    if Graduate is not None:     
        return Graduate
    # If Graduate is not found, return None or raise an exception, depending on your preference.
    return None  # or you can raise an HTTPException here with a 404 status

async def get_one_Graduate_Byname(name: str):
    collection = database.Graduate
    Graduate = await collection.find_one({'name': name})
    return Graduate      