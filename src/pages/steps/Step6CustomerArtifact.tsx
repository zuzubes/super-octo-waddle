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
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Step 6</p>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Reports</h3>
        <p className="mt-2 text-sm text-slate-500">
          Come back here to monitor the workflow v2 runs
        </p>
      </div>

      <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h4 className="text-sm font-semibold text-slate-800">Migration report</h4>
        <div className="mt-3 space-y-1.5">
          <p className="text-xs text-slate-500">Generated: 2024-01-15 10:30:00 UTC</p>
          <p className="text-xs text-slate-500">Match rate: 92.5%</p>
          <p className="text-xs text-slate-500">Flagged workflows: 2</p>
          <p className="text-xs text-slate-500">Total documents: 1,247</p>
        </div>
      </div>

      {exportComplete && (
        <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
          <p className="text-sm font-medium text-green-800">Report exported successfully!</p>
        </div>
      )}

      <div className="flex items-center justify-between border-t border-slate-100 pt-5">
        <button
          type="button"
          onClick={handleExport}
          disabled={isExporting || exportComplete}
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          {isExporting ? 'Exporting…' : exportComplete ? 'Exported' : 'Export Report'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default Step6CustomerArtifact;