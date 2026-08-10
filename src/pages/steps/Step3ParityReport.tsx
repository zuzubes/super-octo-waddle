// Step 3: Parity Report

import React, { useState } from 'react';

const Step3ParityReport = ({ onNext }) => {
  const [reportData, setReportData] = useState({
    matchRate: 92.5,
    divergedFields: [
      { field: 'Customer Name', count: 12, matched: 9, mismatched: 3 },
      { field: 'Order Date', count: 8, matched: 7, mismatched: 1 },
      { field: 'Total Amount', count: 5, matched: 4, mismatched: 1 }
    ],
    flaggedWorkflows: [
      { id: 'WF-001', reason: 'Custom prompt failed' },
      { id: 'WF-003', reason: 'Branching logic mismatch' }
    ]
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Parity Report</h3>

      <div className="mb-6">
        <p className="text-sm text-gray-600">
          Generated field-level diff report with match rate: {reportData.matchRate.toFixed(1)}%
        </p>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-700">Field-Level Diffs</h4>
        <table className="w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2">Field</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Matched</th>
              <th className="px-4 py-2">Mismatched</th>
            </tr>
          </thead>
          <tbody>
            {reportData.divergedFields.map(field => (
              <tr key={field.field}>
                <td className="px-4 py-2">{field.field}</td>
                <td className="px-4 py-2">{field.count}</td>
                <td className="px-4 py-2">{field.matched}</td>
                <td className="px-4 py-2">{field.mismatched}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-700">Flagged Workflows</h4>
        <ul className="list-disc pl-4">
          {reportData.flaggedWorkflows.map(wf => (
            <li key={wf.id} className="mb-2">
              <strong>{wf.id}</strong>: {wf.reason}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => onNext(4)}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Step3ParityReport;