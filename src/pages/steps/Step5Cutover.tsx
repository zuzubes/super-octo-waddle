// Step 5: Cutover + Rollback Window

import React, { useState } from 'react';

const Step5Cutover = ({ onNext }) => {
  const [cutoverConfirmed, setCutoverConfirmed] = useState(false);
  const [isPromoting, setIsPromoting] = useState(false);

  const handlePromote = () => {
    setIsPromoting(true);
    setTimeout(() => {
      setIsPromoting(false);
      onNext(6);
    }, 2000);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Cutover + Rollback Window</h3>

      <div className="mb-6">
        <p className="text-sm text-gray-600">
          Promote v2 to production. Legacy workflows kept warm for 30 days with one-click rollback.
        </p>
      </div>

      <div className="border border-gray-300 p-4 rounded-md mb-6">
        <h4 className="font-medium text-gray-800">Rollback Window</h4>
        <p className="text-sm text-gray-600 mt-1">30 days remaining</p>
        <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 w-full transition-all duration-300" />
        </div>
      </div>

      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            onChange={e => setCutoverConfirmed(e.target.checked)}
          />
          <span className="text-sm text-gray-700">I confirm cutover to v2 production</span>
        </label>

        <button
          onClick={handlePromote}
          disabled={!cutoverConfirmed || isPromoting}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {isPromoting ? 'Promoting...' : 'Promote to Production'}
        </button>
      </div>
    </div>
  );
};

export default Step5Cutover;