from pymongo import MongoClient

# MongoDB Connection
mongo_uri = "mongodb+srv://admin0:heqVN5oxBkRFdZRj@cluster0.3libabt.mongodb.net/?retryWrites=true&w=majority"
mongo_client = MongoClient(mongo_uri)
mongo_database = mongo_client.api_database
mongo_universities_collection = mongo_database.Universities
mongo_users_collection = mongo_database.Graduate

try:
    # Obtener la lista de universidades desde la colección Universities
    universities = mongo_universities_collection.find({}, {"university": 1, "_id": 1})
    university_id_map = {university["university"]: university["_id"] for university in universities}

    # Actualizar usuarios con el ID de la universidad correspondiente
    for university_name, university_id in university_id_map.items():
        mongo_users_collection.update_many(
            {"institute": university_name},
            {"$set": {"universityId": university_id}}
        )

    print("ID de universidades actualizado en la colección Users correctamente")

except Exception as e:
    print(f"Error al actualizar ID de universidades en la colección Users: {e}")
finally:
    # Cerrar la conexión a MongoDB
    mongo_client.close()
