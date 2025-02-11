import React from 'react';

export default function OptionsSelector({ voice, setVoice, timeLimit, setTimeLimit }) {
  return (
    <>
      <div className="mb-4">
        <p className="mb-2">Select Voice Type:</p>
        <div className="flex space-x-4">
          <label className="cursor-pointer">
            <input
              type="radio"
              name="voiceType"
              value="male"
              checked={voice === "male"}
              onChange={(e) => setVoice(e.target.value)}
              className="cursor-pointer"
            /> Male
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="voiceType"
              value="female"
              checked={voice === "female"}
              onChange={(e) => setVoice(e.target.value)}
              className="cursor-pointer"
            /> Female
          </label>
        </div>
      </div>
      <div className="mb-4">
        <p className="mb-2">Select Time Limit:</p>
        <div className="flex space-x-4">
          <label className="cursor-pointer">
            <input
              type="radio"
              name="timeLimit"
              value="30"
              checked={timeLimit === "30"}
              onChange={(e) => setTimeLimit(e.target.value)}
              className="cursor-pointer"
            /> 30 sec
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="timeLimit"
              value="60"
              checked={timeLimit === "60"}
              onChange={(e) => setTimeLimit(e.target.value)}
              className="cursor-pointer"
            /> 1 min
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="timeLimit"
              value="300"
              checked={timeLimit === "300"}
              onChange={(e) => setTimeLimit(e.target.value)}
              className="cursor-pointer"
            /> 5 min
          </label>
        </div>
      </div>
    </>
  );
}