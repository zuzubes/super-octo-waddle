// Step 6: Reports

import React, { useState } from 'react';

const Step6CustomerArtifact = ({ onCancel }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportComplete, setExportComplete] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportComplete(true);
    }, 1500);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Reports</h3>

      <div className="border border-gray-300 p-4 rounded-md mb-6">
        <h4 className="font-medium text-gray-800">Migration Report</h4>
        <div className="mt-2 p-3 bg-gray-50 rounded-md">
          <p className="text-xs text-gray-600 mb-2">Generated: 2024-01-15 10:30:00 UTC</p>
          <p className="text-xs text-gray-600 mb-2">Match Rate: 92.5%</p>
          <p className="text-xs text-gray-600 mb-2">Flagged Workflows: 2</p>
          <p className="text-xs text-gray-600 mb-2">Total Documents: 1,247</p>
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={handleExport}
          disabled={isExporting || exportComplete}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          {isExporting ? 'Exporting...' : exportComplete ? 'Exported' : 'Export Report'}
        </button>

        {exportComplete && (
          <div className="p-3 bg-green-50 rounded-md">
            <p className="text-sm text-green-800">Report exported successfully!</p>
          </div>
        )}
      </div>

      <div className="mt-6">
        <button
          onClick={onCancel}
          className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Step6CustomerArtifact;