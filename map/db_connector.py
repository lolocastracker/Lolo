from mysql.connector import pooling
from mysql.connector import Error
import os 
import logging

#LoadEnv Vars
from dotenv import load_dotenv
from pathlib import Path
dotenv_path = Path('../env/.env')
load_dotenv(dotenv_path=dotenv_path)

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

DB_NAME = os.getenv('DB_NAME')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_USER = os.getenv('DB_USER')
DB_HOST = os.getenv('DB_HOST')

def create_pool():
    """ 
    Creates a MySQL connection pool using credentials from environment variables.
    The `pool_size` is set to 32 to handle multiple connections efficiently.
    """
    try:
        config = {
            "user": DB_USER,
            "database": DB_NAME,
            "password": DB_PASSWORD,
            "host": DB_HOST
        }
        conn = pooling.MySQLConnectionPool(pool_size=32, **config)
        logging.info("Database connection pool created successfully.")
        return conn
    except Error as e:
        logging.error(f"Error creating connection pool: {e}", exc_info=True)
        # Re-raise the exception to be handled by the calling function
        raise e

def execute_query(db_connection = None, query = None, query_params = ()):
    """
    Executes a given SQL query on the given db connection using parameterized queries.
    This method is designed to prevent SQL injection by separating the query from the parameters.
    """
    cursor = None
    try:
        if db_connection is None:
            logging.error("No database connection provided.")
            return None
        if not query or not query.strip():
            logging.error("Query is empty or None.")
            return None

        logging.info("Executing query with parameters: %s, %s", query.strip(), query_params)
        
        cursor = db_connection.cursor(dictionary=True, buffered=True)
        
        cursor.execute(query, query_params)

        # Commit any changes to the database
        db_connection.commit()
        
        return cursor
    except Error as e:
        logging.error(f"Error executing query: {e}", exc_info=True)
        # Rollback in case of a database error
        if db_connection and db_connection.is_connected():
            db_connection.rollback()
        # Return None to indicate failure
        return None
    finally:
        if cursor:
            cursor.close()