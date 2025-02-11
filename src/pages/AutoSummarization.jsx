import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import FileUploader from '../components/FileUploader';
import TimeLimitSelector from '../components/TimeLimitSelector';

export default function AutoSummarization() {
  const [loading, setLoading] = useState(false);
  const [timeLimit, setTimeLimit] = useState("30");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || loading) return;
    setLoading(true);
    console.log("Auto-Summarisation: File upload started");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Auto-Summarisation: File processed");
    } catch (error) {
      console.error("Error processing file:", error);
      Sentry.captureException(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">Auto‑Summarisation</h2>
      <FileUploader loading={loading} handleFileChange={handleFileChange} />
      <TimeLimitSelector timeLimit={timeLimit} setTimeLimit={setTimeLimit} />
      <Link to="/">
        <button className="cursor-pointer bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">
          Back
        </button>
      </Link>
    </div>
  );
}