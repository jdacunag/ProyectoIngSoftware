from fastapi import APIRouter
from dbPurchase import *
from models import PurchaseData, UpdatePurchaseData
from fastapi import HTTPException

Purchased = APIRouter()

@Purchased.get('/Purchase')
async def get_Graduates():
    PurchaseData = await get_all_Purchase()
    return PurchaseData

@Purchased.post('/Purchase', response_model=PurchaseData)
async def save_Graduate(PurchaseData: PurchaseData):

    
    response = await create_PurchaseData(PurchaseData.dict())
    if response:
        return response
    raise HTTPException(400, 'Something went wrong')
