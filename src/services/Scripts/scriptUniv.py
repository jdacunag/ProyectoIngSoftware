from pymongo import MongoClient

# MongoDB Connection
mongo_uri = "mongodb+srv://admin0:heqVN5oxBkRFdZRj@cluster0.3libabt.mongodb.net/?retryWrites=true&w=majority"
mongo_client = MongoClient(mongo_uri)
mongo_database = mongo_client.api_database
mongo_universities_collection = mongo_database.Universities

try:
    # Imagen y descripción predeterminadas
    default_description = "Esta es la descripción predeterminada de la universidad."
    default_image_base64 = "default"

    # Lista de universidades a añadir
    universities_to_add = [
    ]

    # Agregar cada universidad a la colección
    for university_name in universities_to_add:
        university_document = {
            "university": university_name,
            "description": default_description,
            "image_base64": default_image_base64,
        }

        # Actualizar o insertar el documento en la colección Universities
        mongo_universities_collection.update_one(
            {"university": university_name},
            {"$setOnInsert": university_document},
            upsert=True,
        )

    print("Universidades añadidas a MongoDB Universities collection correctamente")

except Exception as e:
    print(f"Error al añadir universidades a MongoDB Universities collection: {e}")
finally:
    # Cerrar la conexión a MongoDB
    mongo_client.close()
