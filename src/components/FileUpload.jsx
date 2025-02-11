import React from 'react';

export default function FileUpload({ loading, handleFileChange }) {
  return (
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
  );
}