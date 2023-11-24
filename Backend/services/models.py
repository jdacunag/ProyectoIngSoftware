from pydantic import BaseModel, Field
from typing import Optional
from bson import ObjectId

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate
    
    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError('Invalid object')
        return str(v)

class Task(BaseModel):
    id: Optional[PyObjectId] = Field(alias='_id')
    title: str
    description: Optional[str] = None
    completed: bool = False

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}


class UpdateTask(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    completed: Optional[bool] = False

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}

class User(BaseModel):
    id: Optional[PyObjectId] = Field(alias='_id')
    username: str
    password: str
    email: str

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}


class UpdateUser(BaseModel):
    username: Optional[str] = None
    password: Optional[str] = None
    email: Optional[str] = None

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}

class PurchaseData(BaseModel):
    id: Optional[PyObjectId] = Field(alias='_id')
    userId: PyObjectId
    UniversityId: PyObjectId
    paymentMethod: int
    email: Optional[str] = None
    date: str
    cvv: str

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}


class UpdatePurchaseData(BaseModel):
    userId: Optional[PyObjectId] = None
    University: Optional[PyObjectId] = None
    paymentMethod: Optional[int] = None
    email: Optional[str] = None
    date: Optional[str]
    cvv: Optional[str]

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}

class University(BaseModel):
    id: Optional[PyObjectId] = Field(alias='_id')
    email: Optional[str]
    cursos: list
    nombre : str
    descripcion: Optional[str] = None
    logo: Optional[bytes] = None
    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}

class UpdateUniversity(BaseModel):
    email: Optional[str] = None
    courses: Optional[str] = None
    address: Optional[str] = None
    name: Optional[str] = None
    description: Optional[str] = None

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}


class Graduate(BaseModel):
    id: Optional[PyObjectId] = Field(alias='_id')
    universityId: Optional[PyObjectId]
    salary: Optional[str]
    END_Date: Optional[str]
    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}


class UpdateGraduate(BaseModel):
    universityId: Optional[PyObjectId] = None
    courseId: Optional[PyObjectId] = None
    name: Optional[str] = None
    company: Optional[str] = None
    salary: Optional[str] = None
    skills: Optional[str] = None

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        json_encoders = {ObjectId: str}