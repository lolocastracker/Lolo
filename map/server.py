from flask import Flask, json, request, jsonify
import db_connector as db
import os 
import copy
import base64
import uuid # create unique filename
import re # for filename sanitization
from PIL import Image # For image content validation
from io import BytesIO
import logging
import requests # New import for making API requests

from mysql.connector import pooling
from mysql.connector import Error

# Load Env Vars
from pathlib import Path

app = Flask(__name__)
# Configure logging for better error tracking
app.logger.setLevel(logging.DEBUG)

db_pool = db.create_pool()


# @app.route("/")
# def hello():
#     return "Hello me"

# @app.route("/api/map/db-test")
# def db_test():
#     """
#     An on-demand route to test the database connection.
#     """
#     db_connection = None  # Initialize to None
#     try:
#         print("testttt",flush=True)
#         # Get a connection from the pool
#         db_connection = db_pool.get_connection()
#         cursor = db_connection.cursor()

#         # Execute a simple query
#         cursor.execute("SELECT NOW();")
#         result = cursor.fetchone()

#         # Return a success message
#         return {
#             "status": "success",
#             "message": "Database connection is working!",
#             "db_time": str(result[0])
#         }

#     except Exception as e:
#         # Return an error message if anything fails
#         return {
#             "status": "error",
#             "message": f"An error occurred: {e}"
#         }, 500

#     finally:
#         # Ensure the connection is always closed and returned to the pool
#         if db_connection and db_connection.is_connected():
#             cursor.close()
#             db_connection.close()

@app.route("/api/map/test")
def hello2():
    print(db)
    return "Hello Map!"
  
@app.route('/api/map/reports')
def get_reports():
    query = '''
     SELECT
    r.reportId,
    r.body,
    r.date,
    GROUP_CONCAT(DISTINCT lt.type SEPARATOR ", ") AS type,
    l.address,
    CAST(l.lat AS CHAR(11)) AS lat,
    CAST(l.`long` AS CHAR(10)) AS `long`,
    im.path
FROM
    lolo_report AS r
LEFT JOIN
    lolo_location AS l ON r.reportId = l.reportId
LEFT JOIN
    lolo_locust_in_report AS lir ON r.reportId = lir.reportId
LEFT JOIN
    lolo_locust AS lt ON lir.locustId = lt.locustId
LEFT JOIN
    lolo_image_in_report AS iir ON r.reportId = iir.reportId
LEFT JOIN
    lolo_image AS im ON iir.imageId = im.imageId
GROUP BY
    r.reportId, r.body, r.date, l.address, l.lat, l.`long`, im.path
ORDER BY
    r.date DESC
    '''
    db_connection = db_pool.get_connection()
    cursor = db.execute_query(db_connection=db_connection, query=query)
    
    result={}
    if cursor!=None:
        result = json.dumps(cursor.fetchall())
    db_connection.close()
    return result

# New function to get address from coordinates using Nominatim
def get_address_from_coordinates(lat, lng):
    """Fetches an address from the Nominatim reverse geocoding API."""
    params = {
        'lat': lat,
        'lon': lng,
        'format': 'json',
    }
    headers = {
        # IMPORTANT: You must provide a valid User-Agent
        'User-Agent': 'lolo-app/1.0 (contact@example.com)'
    }

    try:
        response = requests.get('https://nominatim.openstreetmap.org/reverse', params=params, headers=headers)
        response.raise_for_status()  # Raise an exception for bad status codes
        
        data = response.json()
        
        # Parse the JSON to get the address
        address_label = data.get('display_name')
        
        return address_label

    except requests.exceptions.RequestException as e:
        app.logger.error(f"Nominatim API request failed: {e}")
        return None
    except Exception as e:
        app.logger.error(f"Failed to parse API response: {e}")
        return None


@app.errorhandler(413)
def image_too_big(e):
    ## error 413 is payload too large - probably because
    ## the images is too big
    return 'File Too Large', 413

@app.route('/api/map/submit', methods=['POST'])
def postReport():
    app.logger.info("User Submitting Data")
    try:
        data = request.get_json()
        cleandata=copy.deepcopy(data)
        if cleandata.get("img")!=None:
            cleandata["img"]="binarydata"
        
        # Log clean data
        app.logger.info(f"User Submitted Data: {cleandata}")

        # 1. Input Validation and Sanitization
        date = data.get('date')
        position = data.get('latlng')
        lat = position.get("lat")
        lng = position.get("lng")
        
        # Ensure lat and lng are provided and are numbers
        if not lat or not lng:
            raise ValueError("Latitude and Longitude are required.")
        
        # Cast to float to prevent any injection or type errors
        lat = float(lat)
        lng = float(lng)

        image_data = data.get('img')
        image_name = data.get('imgName') if data.get('imgName') != '' else None
        
        locust_type = data.get('locustType') if data.get('locustType')!= [] else None 
        report_body = data.get('comment') if data.get('comment') != "" else None
        
        # Get address from coordinates using the new function
        addr = get_address_from_coordinates(lat, lng)
        if not addr:
            addr = "No address found"
    
        # 2. Secure File Handling
        final_image_name = None
        if image_data and image_name:
            try:
                # Remove base64 prefix if present
                if "base64," in image_data:
                    image_data = image_data.split("base64,")[1]
                
                final_image_name = saveImage(image_data, image_name)
                
            except Exception as e:
                # Log the specific error for debugging
                app.logger.error(f"Image processing failed: {e}")
                return jsonify({"status": "fail", "message": "Failed to process image data."})
                
        # Handle locustType formatting
        if locust_type:
            locust_type = ",".join(locust_type)

        # 3. Secure Database Call
        query = '''CALL addReport(%s,%s,%s,%s,%s,%s,%s);'''
        db_connection = db_pool.get_connection()
        try:
            cursor = db.execute_query(db_connection=db_connection, query=query, query_params=(date, report_body, addr, lat, lng, final_image_name, locust_type))
            cursor.close()
        except Error as e:
            app.logger.error(f"Database error: {e}", exc_info=True)
            return jsonify({"status": "fail", "message": "Database submission failed."})
        finally:
            if db_connection and db_connection.is_connected():
                db_connection.close()

    except ValueError as ve:
        # Catch specific validation errors and return a user-friendly message
        app.logger.warning(f"Validation error from user: {ve}")
        return jsonify({"status": "fail", "message": str(ve)})

    except Exception as e:
        # Catch all other unexpected errors and log for internal review
        app.logger.error(f"Unexpected error in postReport: {e}", exc_info=True)
        return jsonify({"status": "fail", "message": "An internal server error occurred."})
        
    return jsonify({"status": "success", "message": ""})
        
# Refactored saveImage function for security
def saveImage(img_data_base64, imgName):
    """
    Decodes base64 image data, validates it, and saves it to a secure path.
    Returns the new unique filename, or None on failure.
    """
    # Define a secure base path
    base_path =os.getenv('IMG_BASE_PATH')
    print("this is base path")
    
    # 1. Sanitize the filename to prevent path traversal
    sanitized_name = re.sub(r'[^a-zA-Z0-9_\-.]', '_', imgName)
    # Get the file extension and create a new unique name
    extension = os.path.splitext(sanitized_name)[1]
    if not extension:
        # Default to a safe extension if none is provided
        extension = '.jpg'
    
    new_filename = f"{uuid.uuid4()}{extension}"
    
    # 2. Decode the base64 data
    try:
        image_bytes = base64.b64decode(img_data_base64)
    except Exception as e:
        app.logger.error(f"Base64 decoding failed for image {imgName}: {e}")
        return None
        
    # 3. Restrict to images only
    try:
        # Use Pillow to open and verify the image content
        img = Image.open(BytesIO(image_bytes))
        img.verify()
    except (IOError, SyntaxError) as e:
        app.logger.warning(f"Uploaded file is not a valid image: {imgName} - {e}")
        return None

    # 4. Check that the path exists and create it if not
    os.makedirs(base_path, exist_ok=True)
    
    # 5. Save the image to the secure path
    full_path = os.path.join(base_path, new_filename)
    try:
        with open(full_path, "wb") as f:
            f.write(image_bytes)
    except Exception as e:
        app.logger.error(f"Failed to save image file to disk: {e}")
        return None

    return new_filename


if __name__ == "__main__":
    db_pool = db.create_pool()
    app.run(host='0.0.0.0', debug=True)
