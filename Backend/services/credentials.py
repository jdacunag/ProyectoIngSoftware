from fastapi import APIRouter
from database import *
from models import User, UpdateUser
from fastapi import HTTPException

credentials = APIRouter()

@credentials.post('/login')
async def login(user: UpdateUser):
    foundUser = await getUser(user)
    if foundUser:
        return str(foundUser['_id'])
    return None
@credentials.post('/register', response_model=UpdateUser)
async def register(user: User):
    found_user = await login(user)

    if found_user == True:
        raise HTTPException(409, "User already exists")
    
    response = await createUser(user.dict())
    if response:
        return response
    raise HTTPException(400, 'Something went wrong')