"use client";
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const handleClick = () => {
    toast.success('Button clicked!');
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#111",
            color: "#fff",
          },
        }}
      />
      <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
      <p className="text-lg mb-8 text-gray-300">This is a simple example of a Next.js app with Tailwind CSS.</p>
      <button
        className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        onClick={handleClick}
      >
        Click Me
      </button>
    </div>
  );
}