'use client';

import React, { useEffect, useState } from 'react';
import { getPrediction } from '@/util/api/getPredict';

interface PredictResultProps {
  row: any;
}

const PredictResult: React.FC<PredictResultProps> = ({ row }) => {
  const [prediction, setPrediction] = useState<number[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!row) {
      setPrediction(null);
      setError(null);
      return;
    }
    const fetchPrediction = async () => {
      setLoading(true);
      setError(null);
      setPrediction(null);
      try {
        const input = {
          prompt: row.prompt,
          responseA: row.response_a,
          responseB: row.response_b,
        };
        const result = await getPrediction(input);
        setPrediction(result as number[]);
      } catch (err: any) {
        setError('Failed to get prediction');
      } finally {
        setLoading(false);
      }
    };
    fetchPrediction();
  }, [row]);

  if (!row) return null;

  return (
    <div className="mt-8 w-full max-w-2xl bg-gray-800 text-white rounded p-4 shadow">
      {loading && <div className="mb-2">Predicting...</div>}
      {error && <div className="text-red-400 mb-2">{error}</div>}
      {prediction && (
        <div>
          <div className="font-semibold mb-1">Prediction Probabilities:</div>
          <div className="flex flex-col gap-1 text-sm">
            <div>A wins: {prediction[0]}</div>
            <div>B wins: {prediction[1]}</div>
            <div>Tie: {prediction[2]}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PredictResult;