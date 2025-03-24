from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()

SEARCH_ENGINE_ID = os.getenv('SEARCH_ENGINE_ID')
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

app = Flask(__name__)
CORS(app)  # Enable CORS to allow communication between frontend and backend

@app.route('/submit-data', methods=['POST'])
def submit_data():
    data = request.json  # Get JSON data from the frontend
    user_input = data.get('inputData')  # Access the sent input data
    print(f"Received input: {user_input}")
    payload = {
        'key': GOOGLE_API_KEY,
        'q': user_input,
        'cx':SEARCH_ENGINE_ID,
        'start': 1,
        'num': 10,
        'date_restrict': "m1"
    }
    res = requests.get('https://customsearch.googleapis.com/customsearch/v1', params = payload)
    print(res.json())
    return jsonify({"message": f"Data received: {user_input}"})

if __name__ == '__main__':
    app.run(debug=True)
