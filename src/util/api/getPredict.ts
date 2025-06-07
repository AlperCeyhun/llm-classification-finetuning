interface PredictionInput {
  prompt: string;
  responseA: string;
  responseB: string;
}

export async function getPrediction(input: PredictionInput): Promise<string[] | null> {
  try {
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Send the entire input object (prompt, responseA, responseB)
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // Assuming the Flask endpoint returns {'prediction': ['class_label']}
    return data.prediction;
  } catch (error) {
    console.error("Error fetching prediction:", error);
    return null;
  }
}