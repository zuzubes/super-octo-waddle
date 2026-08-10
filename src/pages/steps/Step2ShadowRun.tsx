// Step 2: Shadow Run

import React, { useState } from 'react';

const Step2ShadowRun = ({ onNext }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const startShadowRun = () => {
    setIsRunning(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 10, 100));
      if (progress >= 100) {
        clearInterval(interval);
        setIsRunning(false);
        onNext(3);
      }
    }, 100);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Shadow Run</h3>

      <div className="mb-6">
        <p className="text-sm text-gray-600">
          Cloning workflows and replaying against historical documents...
        </p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-500 rounded-full mb-2"></div>
          <p className="text-sm font-medium text-white">Shadow Run</p>
        </div>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-500 rounded-full mb-2"></div>
          <p className="text-sm font-medium text-white">Shadow Run</p>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <div className="w-48 h-48 bg-blue-500 rounded-full flex items-center justify-center">
          <p className="text-2xl font-bold text-white">72%</p>
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <button
          onClick={isRunning ? () => {} : startShadowRun}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
          disabled={isRunning}
        >
          {isRunning ? 'Running...' : 'Start Shadow Run'}
        </button>
      </div>
    </div>
  );
};

export default Step2ShadowRun;