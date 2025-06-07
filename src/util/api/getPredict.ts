interface PredictionInput {
  prompt: string;
  responseA: string;
  responseB: string;
}

export async function getPrediction(input: PredictionInput): Promise<number[] | null> {
  try {
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // Assuming the Flask endpoint returns {'prediction': [[probA, probB, probTie]]}
    // If so, return the first element of the array
    return data.prediction[0] as number[];
  } catch (error) {
    console.error("Error fetching prediction:", error);
    return null;
  }
}