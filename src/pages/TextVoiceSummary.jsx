import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import FileUpload from '../components/FileUpload';
import OptionsSelector from '../components/OptionsSelector';

export default function TextVoiceSummary() {
  const [loading, setLoading] = useState(false);
  const [voice, setVoice] = useState("male");
  const [timeLimit, setTimeLimit] = useState("30");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || loading) return;
    setLoading(true);
    console.log("Text + Voice Summary: File upload started");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Text + Voice Summary: File processed");
    } catch (error) {
      console.error("Error processing file:", error);
      Sentry.captureException(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">Text and Voice Summary</h2>
      <FileUpload loading={loading} handleFileChange={handleFileChange} />
      <OptionsSelector voice={voice} setVoice={setVoice} timeLimit={timeLimit} setTimeLimit={setTimeLimit} />
      <Link to="/">
        <button className="cursor-pointer bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">
          Back
        </button>
      </Link>
    </div>
  );
}