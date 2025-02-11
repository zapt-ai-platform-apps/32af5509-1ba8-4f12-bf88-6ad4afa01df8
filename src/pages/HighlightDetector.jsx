import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Sentry from '@sentry/browser';

export default function HighlightDetector() {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || loading) return;
    setLoading(true);
    console.log("Highlight Detector: File upload started");
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Highlight Detector: File processed");
    } catch (error) {
      console.error("Error processing file:", error);
      Sentry.captureException(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">Highlight Detector</h2>
      <label className="cursor-pointer bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded mb-4">
        {loading ? "Uploading..." : "Upload Video"}
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="hidden box-border"
          disabled={loading}
        />
      </label>
      <Link to="/">
        <button className="cursor-pointer bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">
          Back
        </button>
      </Link>
    </div>
  );
}