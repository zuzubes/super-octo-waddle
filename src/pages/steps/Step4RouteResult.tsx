import React, { useState } from 'react';

interface Step4RouteResultProps {
  onNext: (step: number) => void;
}

const options = [
  {
    id: 'approve',
    title: 'Approve',
    description: 'Ready to be executed',
    helper: "Once it's approved, go to dashboard, stop the existing workflow and start the v2 version of the workflow",
  },
  {
    id: 'review',
    title: 'Route to Review',
    description: 'Route to Hypatos review team',
    helper: "Once it's routed to review, Hypatos team will review and get back to you with next steps",
  },
];

const Step4RouteResult = ({ onNext }: Step4RouteResultProps) => {
  const [routingDecision, setRoutingDecision] = useState<string | null>(null);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
          Step 4
        </p>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
          Approval
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          Based on parity report results, route workflows for approval or review
        </p>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        {options.map((option) => {
          const isSelected = routingDecision === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setRoutingDecision(option.id)}
              className={`flex flex-col items-start rounded-xl border p-4 text-left transition-all ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-100'
                  : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/40'
              }`}
            >
              <span className="text-sm font-semibold text-slate-900">
                {option.title}
              </span>
              <span className="mt-1 text-xs text-slate-500">
                {option.description}
              </span>
              <span className="mt-3 text-xs text-slate-400">
                {option.helper}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mb-8 text-sm leading-6 text-slate-500">
        Once workflow v2 is approved and executed in production, legacy workflows are kept warm for 30 days with one-click rollback.
      </p>

      <div className="flex justify-end border-t border-slate-100 pt-5">
        <button
          type="button"
          disabled={!routingDecision}
          onClick={() => routingDecision && onNext(4)}
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          Complete
        </button>
      </div>
    </section>
  );
};

export default Step4RouteResult;
export { Step4RouteResult };