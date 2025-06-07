'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DisplayRow from '@/components/DisplayRow';
import PredictResult from '@/components/DisplayPredict';

export default function Home() {
  const router = useRouter();
  const [randomRow, setRandomRow] = useState<any>(null);


  const handleBack = () => {
    router.back();
  };

  const handlePredict = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/csv/random');
      if (!response.ok) {
        throw new Error('Failed to fetch random row');
      }
      const data = await response.json();
      console.log('Random row:', data);
      setRandomRow(data);
    } catch (error) {
      console.error('Error fetching random row:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-4 relative">
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
          Back
      </button>

      <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="mb-4 text-xl font-semibold">Model Page</h1>
          <h2 className="mb-4 text-lg text-gray-600">Can test model prediction accuracy here.</h2>
          <button className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          onClick={handlePredict}>
            Get Random Prediction
          </button>
          <div className="w-full max-w-4xl mt-8 mx-auto px-4">
            <div className="flex flex-row gap-6 items-start">
              <div className="flex-1">
                <DisplayRow row={randomRow} />
              </div>
              <div className="flex-1">
                <PredictResult row={randomRow} />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}