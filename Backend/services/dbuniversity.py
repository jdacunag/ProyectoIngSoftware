from motor.motor_asyncio import AsyncIOMotorClient
from models import University, UpdateUniversity
from bson import ObjectId

uri = "mongodb+srv://admin0:heqVN5oxBkRFdZRj@cluster0.3libabt.mongodb.net/?retryWrites=true&w=majority"
client = AsyncIOMotorClient(uri)
database = client.api_database


async def get_all_universities():
    collection = database.Universities
    try:
        Universities = []
        cursor = collection.find({})
        async for document in cursor:
            Universities.append(University(**document))
        return Universities
    except Exception as e:
        return f'get_all_tasks Query Error: {e}'
    
async def getUniversity(UpdateUniversity:UpdateUniversity):
    collection = database.Universities
    try:
        query = {'email': UpdateUniversity.email}
        University = await collection.find_one(query)
        if University is not None:
            return University
        return None
    except:
        return None
    
async def create_University(University: University):
    collection = database.Universities
    try:
        newUniversity = await collection.insert_one(University)
        createUniversity = await collection.find_one({'_id': newUniversity.inserted_id})
        return createUniversity
    except:
        return None
async def get_one_University_Byid(id: str):
    collection = database.Universities
    University = await collection.find_one({'_id': ObjectId(id)})
    if University is not None:     
        return University
    return None  

async def get_one_University_Byname(name: str):
    collection = database.Universities
    University = await collection.find_one({'name': name})
    return University              