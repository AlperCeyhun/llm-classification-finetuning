"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    toast.success('Button clicked!');
    router.push('/test');
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Toaster position="bottom-right" toastOptions={{
          style: {
            background: "gray",
            border: "1px solid white",
            color: "#fff",
          },}}/>
      <h1 className="text-4xl font-bold mb-4">LLM Response preference prediction</h1>
      <p className="text-lg mb-8 text-gray-300">From a large dataset of double responses for a user prompt, we are trying to predict the general user preference.</p>
      <button className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"onClick={handleClick}>Go to Test Page</button>
    </div>
  );
}