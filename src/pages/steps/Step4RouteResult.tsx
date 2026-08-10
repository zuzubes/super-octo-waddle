// Step 4: Route by Result

import React, { useState } from 'react';

const Step4RouteResult = ({ onNext }) => {
  const [routingDecision, setRoutingDecision] = useState('');

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Route by Result</h3>

      <div className="mb-6">
        <p className="text-sm text-gray-600">
          Based on parity report results, route workflows for approval or review.
        </p>
      </div>

      <div className="space-y-4">
        <div className="border border-gray-300 p-4 rounded-md">
          <h4 className="font-medium text-gray-800">Passed Workflows</h4>
          <p className="text-sm text-gray-600 mt-1">Queue for customer approval and sign-off</p>
          <button
            onClick={() => setRoutingDecision('approve')}
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Queue for Approval
          </button>
        </div>

        <div className="border border-gray-300 p-4 rounded-md">
          <h4 className="font-medium text-gray-800">Failed Workflows</h4>
          <p className="text-sm text-gray-600 mt-1">Route to Hypatos review team</p>
          <button
            onClick={() => setRoutingDecision('review')}
            className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md"
          >
            Route to Review
          </button>
        </div>
      </div>

      <button
        onClick={() => routingDecision && onNext(5)}
        disabled={!routingDecision}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Step4RouteResult;