"use client";
import React from "react";
import { Toaster } from "react-hot-toast";
import NavButton from "@/components/NavButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "gray",
            border: "1px solid white",
            color: "#fff",
          },
        }}
      />
      <h1 className="text-4xl font-bold mb-4">
        LLM Response preference prediction
      </h1>
      <p className="text-lg mb-8 text-gray-300">
        From a large dataset of double responses for a user prompt, we are trying to predict the general user preference.
      </p>
      <div className="flex flex-row gap-4">
        <NavButton label="View Dataset" route="/dataset" />
        <NavButton label="View Model" route="/model" />
      </div>
    </div>
  );
}