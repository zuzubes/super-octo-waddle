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
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Step 3</p>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Parity report</h3>
        <p className="mt-2 text-sm text-slate-500">
          Generated field-level diff report with match rate: {reportData.matchRate.toFixed(1)}%
        </p>
      </div>

      <div className="mb-6">
        <h4 className="mb-3 text-sm font-semibold text-slate-800">Field-level diffs</h4>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Field</th>
                <th className="px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">Total</th>
                <th className="px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">Matched</th>
                <th className="px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">Mismatched</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reportData.divergedFields.map(field => (
                <tr key={field.field}>
                  <td className="px-4 py-2.5 text-left text-sm font-medium text-slate-900">{field.field}</td>
                  <td className="px-4 py-2.5 text-center text-sm text-slate-600">{field.count}</td>
                  <td className="px-4 py-2.5 text-center text-sm text-slate-600">{field.matched}</td>
                  <td className="px-4 py-2.5 text-center text-sm text-slate-600">{field.mismatched}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="mb-3 text-sm font-semibold text-slate-800">Flagged workflows</h4>
        <ul className="space-y-2">
          {reportData.flaggedWorkflows.map(wf => (
            <li key={wf.id} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">{wf.id}</span>: {wf.reason}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end border-t border-slate-100 pt-5">
        <button
          type="button"
          onClick={() => onNext(4)}
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Step3ParityReport;