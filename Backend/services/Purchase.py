from fastapi import APIRouter
from dbPurchase import *
from models import PurchaseData, UpdatePurchaseData
from fastapi import HTTPException

Purchased = APIRouter()

@Purchased.get('/Purchase')
async def get_Purchase():
    PurchaseData = await get_all_Purchase()
    return PurchaseData

@Purchased.post('/Purchase', response_model=PurchaseData)
async def save_Graduate(PurchaseData: PurchaseData):

    
    response = await create_PurchaseData(PurchaseData.dict())
    if response:
        return response
    raise HTTPException(400, 'Something went wrong')


@Purchased.get('/Purchase/{user_id}', response_model=list[PurchaseData])
async def get_all_purchases_by_user(user_id: str):
    """
    Retrieve all purchases associated with a specific user ID.
    """
    try:
        purchases = await get_all_purchasesByUser(user_id)
        if purchases:
            return purchases
        raise HTTPException(status_code=404, detail=f'No purchases found for user ID: {user_id}')
    except Exception as e:
        raise HTTPException(status_code=500, detail=f'Something went wrong: {str(e)}')