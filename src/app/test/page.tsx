"use client";
import React, { useState } from "react";
import DisplayCsv from "@/components/DisplayCsv";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      Test Page
      <DisplayCsv url="public/model/train.csv"/>
    </div>
  );
}