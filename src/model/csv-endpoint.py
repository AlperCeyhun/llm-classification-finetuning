from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/api/csv')
def send_csv_json():
    df = pd.read_csv('../../public/model/train.csv')
    # Optional: sanitize formula-like cells
    df = df.applymap(lambda x: f"'{x}" if isinstance(x, str) and x.startswith(('=', '+', '-', '@')) else x)
    data = df.to_dict(orient='records')
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)