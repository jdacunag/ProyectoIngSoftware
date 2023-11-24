from motor.motor_asyncio import AsyncIOMotorClient
from models import PurchaseData, UpdatePurchaseData
from bson import ObjectId

uri = "mongodb+srv://admin0:heqVN5oxBkRFdZRj@cluster0.3libabt.mongodb.net/?retryWrites=true&w=majority"
client = AsyncIOMotorClient(uri)
database = client.api_database


async def get_all_Purchase():
    collection = database.Purchase
    try:
        Purchased = []
        cursor = collection.find({})
        async for document in cursor:
            Purchased.append(PurchaseData(**document))
        return Purchased
    except Exception as e:
        return f'get_all_tasks Query Error: {e}'

async def getPurchase(UpdatePurchaseData:UpdatePurchaseData):
    collection = database.Purchase
    try:
        query = {'userId': UpdatePurchaseData.userId, 'paymentMethod': UpdatePurchaseData.paymentMethod, 'email': UpdatePurchaseData.email, 'date':UpdatePurchaseData.date,'cvv':UpdatePurchaseData.cvv }
        Graduate = await collection.find_one(query)
        if Graduate is not None:
            return Graduate
        return None
    except:
        return None
    
async def create_PurchaseData(PurchaseData: PurchaseData):
    collection = database.Purchase
    try:
        PurchaseData.universityId = ObjectId(PurchaseData.universityId)
        #PurchaseData.userId = ObjectId(PurchaseData.userId)
        new_PurchaseData = await collection.insert_one(PurchaseData.dict())
        createPurchaseData = await collection.find_one({'_id': new_PurchaseData.inserted_id})
        return createPurchaseData
    except:
        return PurchaseData
    