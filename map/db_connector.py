from mysql.connector import pooling
from mysql.connector import Error

def create_pool():
    """ Connect to MySQL database """
    conn = None
    try:
        config={"user":'root', "database":'lolo_db',"password":"testpass","host":"db"}
        # config={"user":'tvharris', "database":'lolo_db',"password":"dbpass","host":"db"}
        conn =  pooling.MySQLConnectionPool(pool_size = 32,**config)
        return conn
    except Error as e:
        print(e)

def execute_query(db_connection = None, query = None, query_params = ()):
    '''
    executes a given SQL query on the given db connection and returns a Cursor object
    db_connection: a MySQLdb connection object created by create_pool()
    returns: A Cursor object as specified at https://www.python.org/dev/peps/pep-0249/#cursor-objects.
    You need to run .fetchall() or .fetchone() on that object to actually acccess the results.
    '''

    if db_connection is None:
        print("No connection to the database found! Have you called create_pool() first?")
        return None

    if query is None or len(query.strip()) == 0:
        print("query is empty! Please pass a SQL query in query")
        return None

    print("Executing %s with %s" % (query, query_params));

    cursor = db_connection.cursor(buffered=True)

    '''
    params = tuple()
    #create a tuple of parameters to send with the query
    for q in query_params:
        params = params + (q)
    '''
    #TODO: Sanitize the query before executing it!!!
    cursor.execute(query, query_params)

    # this will actually commit any changes to the database. without this no
    # changes will be committed!
    db_connection.commit();
    return cursor
