import psycopg2
from pymongo import MongoClient
from motor.motor_asyncio import AsyncIOMotorClient
from bson import ObjectId
from datetime import datetime

# PostgreSQL Connection
pg_host = "mg-innovation2.postgres.database.azure.com"
pg_user = "MG_USER_TEST_INNOV"
pg_password = '2NeRJbQs*J@aOoIwlK$IBLSGH!9mMEMtqJ2rlP4pPBL4^w'
pg_database = "innovation"

# MongoDB Connection
mongo_uri = "mongodb+srv://admin0:heqVN5oxBkRFdZRj@cluster0.3libabt.mongodb.net/?retryWrites=true&w=majority"
mongo_client = MongoClient(mongo_uri)
mongo_database = mongo_client.api_database  # Change 'api_database' with your MongoDB database name
mongo_collection = mongo_database.Graduate  # Change 'your_collection_name' with your MongoDB collection name

try:
    # PostgreSQL Connection
    pg_conn = psycopg2.connect(
        host=pg_host,
        user=pg_user,
        password=pg_password,
        database=pg_database
    )

    pg_cursor = pg_conn.cursor()

    # Define the SQL query with a JOIN between the candidates and studies tables and a WHERE filter
    query = """
    SELECT
        c.id,
        c.salary,
        s.institute,
        s.title,
        s.end_date
    FROM
        candidates c
    LEFT JOIN
        studies s ON c.ID = s.candidate_id
    WHERE
        s.institute IS NOT NULL
    LIMIT 
        500
    """

    # Execute the SQL query
    pg_cursor.execute(query)

    # Fetch the results
    results = pg_cursor.fetchall()

    # Close the cursor and PostgreSQL connection
    pg_cursor.close()
    pg_conn.close()

    # Insert the results into MongoDB
    for row in results:
        id, salary, institute, title, end_date = row
        document = {
            "id": id,
            "salary": salary,
            "institute": institute,
            "title": title,
            "end_date": str(end_date)
        }
        print(document)
        mongo_collection.insert_one(document)

    print("Data sent to MongoDB successfully")

except Exception as e:
    print(f"Error sending data to MongoDB: {e}")
finally:
    # Close the MongoDB connection
    mongo_client.close()
