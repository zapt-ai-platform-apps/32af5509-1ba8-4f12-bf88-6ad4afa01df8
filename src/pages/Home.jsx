import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  console.log("Navigated to Home Screen");
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-8">Welcome to SkipSync</h1>
      <div className="w-full flex justify-around items-center">
        <Link to="/highlight">
          <button className="cursor-pointer bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">
            Highlight Detector
          </button>
        </Link>
        <Link to="/auto">
          <button className="cursor-pointer bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">
            Auto-Summarisation
          </button>
        </Link>
        <Link to="/text-voice">
          <button className="cursor-pointer bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">
            Text + Voice Summary
          </button>
        </Link>
      </div>
    </div>
  );
}