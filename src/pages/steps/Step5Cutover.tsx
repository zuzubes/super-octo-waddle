// Step 5: Rollback window

import React, { useState } from 'react';

const Step5Cutover = ({ onNext }) => {
  const [isPromoting, setIsPromoting] = useState(false);

  const handlePromote = () => {
    setIsPromoting(true);
    setTimeout(() => {
      setIsPromoting(false);
      onNext(6);
    }, 2000);
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Step 5</p>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Rollback window</h3>
        <p className="mt-2 text-sm text-slate-500">
          Once workflow v2 is executed in production, legacy workflows are kept warm for 30 days with one-click rollback. Come back here to rollback.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <h4 className="text-sm font-semibold text-slate-800">Time remaining</h4>
        <p className="mt-1 text-xs text-slate-500">30 days remaining</p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-full rounded-full bg-blue-500 transition-all duration-300" />
        </div>
      </div>

      <div className="flex justify-end border-t border-slate-100 pt-5">
        <button
          type="button"
          onClick={handlePromote}
          disabled={isPromoting}
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          {isPromoting ? 'Promoting…' : 'Next'}
        </button>
      </div>
    </section>
  );
};

export default Step5Cutover;