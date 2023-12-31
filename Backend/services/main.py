from fastapi import FastAPI
from task import tasks
from graduate import Graduates
from credentials import credentials
from University import Universities
from Purchase import Purchased
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    
    CORSMiddleware,
    allow_origins=['http://localhost:5173'],
    allow_credentials=True,
    allow_methods=['*'],
    
)

@app.get('/')
def welcome():
    return {'message': 'Default welcome message'}
app.include_router(Purchased)
app.include_router(tasks)
app.include_router(credentials)
app.include_router(Graduates)
app.include_router(Universities)