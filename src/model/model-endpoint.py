from flask import Flask, request, jsonify, send_from_directory
import joblib
import numpy as np
import os
import pandas as pd # Import pandas for CSV handling
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "mymodel.pkl")

# --- Load vectorizers and model (as discussed in previous turns) ---
# You will need to save these vectorizers from your Jupyter notebook and load them here.
# Example paths for vectorizers:
VECTORIZER_PROMPT_PATH = os.path.join(BASE_DIR, "vectorizer_prompt.pkl")
VECTORIZER_RESPONSE_A_PATH = os.path.join(BASE_DIR, "vectorizer_response_a.pkl")
VECTORIZER_RESPONSE_B_PATH = os.path.join(BASE_DIR, "vectorizer_response_b.pkl")

model = None
vectorizer_prompt = None
vectorizer_response_a = None
vectorizer_response_b = None

try:
    model = joblib.load(MODEL_PATH)
    vectorizer_prompt = joblib.load(VECTORIZER_PROMPT_PATH)
    vectorizer_response_a = joblib.load(VECTORIZER_RESPONSE_A_PATH)
    vectorizer_response_b = joblib.load(VECTORIZER_RESPONSE_B_PATH)
    print("Model and vectorizers loaded successfully.")
except FileNotFoundError:
    print("Warning: Model or vectorizer files not found. Prediction endpoint may not function correctly.")
    print(f"Expected files: {MODEL_PATH}, {VECTORIZER_PROMPT_PATH}, {VECTORIZER_RESPONSE_A_PATH}, {VECTORIZER_RESPONSE_B_PATH}")
except Exception as e:
    print(f"Error loading model or vectorizers: {e}")


@app.route('/predict', methods=['POST'])
@app.route('/api/v1/predict', methods=['POST'])
def predict():
    if model is None or vectorizer_prompt is None or vectorizer_response_a is None or vectorizer_response_b is None:
        return jsonify({"error": "ML model or vectorizers not loaded. Please check server logs."}), 500

    data = request.get_json()
    
    prompt_text = data.get('prompt', '')
    response_a_text = data.get('responseA', '')
    response_b_text = data.get('responseB', '')

    try:
        # Vectorize text inputs using the loaded TF-IDF vectorizers
        # .transform expects an iterable, so wrap single strings in a list
        prompt_features = vectorizer_prompt.transform([prompt_text]).toarray()
        response_a_features = vectorizer_response_a.transform([response_a_text]).toarray()
        response_b_features = vectorizer_response_b.transform([response_b_text]).toarray()

        # Concatenate the vectorized features
        combined_features = np.concatenate((prompt_features, response_a_features, response_b_features), axis=1)

        # Make prediction (or get probabilities)
        prediction = model.predict(combined_features)
        probabilities = model.predict_proba(combined_features)
        return jsonify({'prediction': probabilities.tolist()})
        #return jsonify({'prediction': prediction.tolist()})
    except Exception as e:
        print(f"Error during prediction: {e}")
        return jsonify({"error": f"Prediction failed: {e}"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)