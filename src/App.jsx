import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AutoSummarization from './pages/AutoSummarization';
import TextVoiceSummary from './pages/TextVoiceSummary';
import HighlightDetector from './pages/HighlightDetector';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-grow h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auto" element={<AutoSummarization />} />
          <Route path="/text-voice" element={<TextVoiceSummary />} />
          <Route path="/highlight" element={<HighlightDetector />} />
        </Routes>
      </div>
      <footer className="p-4 text-center">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-blue-400">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}