from flask import Flask, jsonify
import pandas as pd
import os
import random
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/csv')
def send_csv_json():
    # CSV is in the same folder as this script
    csv_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'small_train.csv')
    print("Reading CSV from:", csv_path)
    print("Exists?", os.path.exists(csv_path))
    df = pd.read_csv(csv_path)
    # Optional: sanitize formula-like cells
    df = df.applymap(lambda x: f"'{x}" if isinstance(x, str) and x.startswith(('=', '+', '-', '@')) else x)
    data = df.to_dict(orient='records')
    return jsonify(data)

@app.route('/api/csv/random')
def send_random_row():
    csv_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'small_train.csv')
    df = pd.read_csv(csv_path)
    df = df.applymap(lambda x: f"'{x}" if isinstance(x, str) and x.startswith(('=', '+', '-', '@')) else x)
    data = df.to_dict(orient='records')
    if not data:
        return jsonify({"error": "No data found"}), 404
    random_row = random.choice(data)
    return jsonify(random_row)

if __name__ == '__main__':
    app.run(debug=True, port=5001)