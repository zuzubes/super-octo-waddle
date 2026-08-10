// Step 1: Select Workflow

import React, { useState } from 'react';

interface Step1SelectWorkflowProps {
  onNext: (step: number) => void;
}

const workflows = [
  { id: 'wf-001', name: 'Invoice Processing', version: 'v1', documents: '12,480 documents' },
  { id: 'wf-002', name: 'Purchase Order Matching', version: 'v1', documents: '8,240 documents' },
  { id: 'wf-003', name: 'Employee Onboarding', version: 'v1', documents: '5,120 documents' },
  { id: 'wf-004', name: 'Expense Report Approval', version: 'v2', documents: '3,860 documents' },
];

const Step1SelectCohort = ({ onNext }: Step1SelectWorkflowProps) => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Step 1</p>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Select workflow</h3>
        <p className="mt-2 text-sm text-slate-500">Select the workflows you want to migrate</p>
      </div>

      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-slate-800">Select workflows</h4>
          <span className="text-xs text-slate-400">{selectedWorkflow ? '1 selected' : 'Select one to continue'}</span>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {workflows.map((workflow) => {
            const isUnavailable = workflow.version === 'v2';
            const isSelected = selectedWorkflow === workflow.id;

            return (
              <button
                key={workflow.id}
                type="button"
                disabled={isUnavailable}
                onClick={() => setSelectedWorkflow(workflow.id)}
                className={`flex min-h-[88px] items-center justify-between rounded-xl border p-4 text-left transition-all ${
                  isUnavailable
                    ? 'cursor-not-allowed border-slate-200 bg-slate-100 opacity-55'
                    : isSelected
                      ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-100'
                      : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/40'
                }`}
              >
                <span>
                  <span className="block text-sm font-semibold text-slate-900">{workflow.name}</span>
                  <span className="mt-1 block text-xs text-slate-500">{workflow.documents}</span>
                </span>
                <span className={`rounded-md px-2 py-1 text-xs font-semibold ${isUnavailable ? 'bg-slate-200 text-slate-500' : 'bg-slate-100 text-slate-600'}`}>
                  {workflow.version}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-slate-400">Workflows already on v2 are unavailable for migration.</p>
      </div>

      <div className="flex justify-end border-t border-slate-100 pt-5">
        <button
          type="button"
          disabled={!selectedWorkflow}
          onClick={() => onNext(2)}
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          Continue to shadow-run
        </button>
      </div>
    </section>
  );
};

export default Step1SelectCohort;
export { Step1SelectCohort };
