from motor.motor_asyncio import AsyncIOMotorClient
from models import Course, UpdateCourse
from bson import ObjectId

uri = "mongodb+srv://admin0:heqVN5oxBkRFdZRj@cluster0.3libabt.mongodb.net/?retryWrites=true&w=majority"
client = AsyncIOMotorClient(uri)
database = client.api_database

async def get_all_Courses():
    collection = database.Course
    try:
        Courses = []
        cursor = collection.find({})
        async for document in cursor:
            Courses.append(Course(**document))
        return Courses
    except Exception as e:
        return f'get_all_tasks Query Error: {e}'

async def get_Course(UpdateCourse:UpdateCourse):
    collection = database.Course
    try:
        query = {'universityId': UpdateCourse.universityId, 'name': UpdateCourse.name}
        user = await collection.find_one(query)
        if user is not None:
            return user
        return None
    except:
        return None
    
async def create_Course(Course: Course):
    collection = database.Course
    try:
        newCourse = await collection.insert_one(Course)
        createCourse = await collection.find_one({'_id': newCourse.inserted_id})
        return createCourse
    except:
        return None
    

async def get_one_Course_Byid(id: str):
    collection = database.Course
    Course = await collection.find_one({'_id':ObjectId(id)})
    if Course is not None:     
        return Course
    # If Course is not found, return None or raise an exception, depending on your preference.
    return None  # or you can raise an HTTPException here with a 404 status

async def get_one_Course_Byname(name: str):
    collection = database.Course
    Course = await collection.find_one({'name': name})
    return Course    