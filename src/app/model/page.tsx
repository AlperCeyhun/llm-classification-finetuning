'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <div className="flex flex-col min-h-screen p-4 relative">
      <button
        onClick={handleClick}
        className="absolute top-4 left-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
          Back
      </button>

      <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="mb-4 text-xl font-semibold">Model Page</h1>
          <h2 className="mb-2 text-lg text-gray-600">Can test model prediction accuracy here.</h2>
      </div>
    </div>
  );
}