// Step 2: Shadow Run

import React, { useRef, useState } from 'react';

interface Step2ShadowRunProps {
  onNext: (step: number) => void;
}

const Step2ShadowRun = ({ onNext }: Step2ShadowRunProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [testDocument, setTestDocument] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const startShadowRun = () => {
    setIsRunning(true);
    setProgress(0);
    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      setProgress(Math.min(current, 100));
      if (current >= 100) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 100);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTestDocument(event.target.files?.[0] ?? null);
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Step 2</p>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Shadow run</h3>
        <p className="mt-2 text-sm text-slate-500">Clone the workflow and replay it against historical documents</p>
      </div>

      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-slate-800">Test document</h4>
          <span className="text-xs text-slate-400">{testDocument ? testDocument.name : 'Optional for this demo'}</span>
        </div>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-6 text-center transition hover:border-blue-300 hover:bg-blue-50/40"
        >
          <span className="text-sm font-semibold text-slate-700">
            {testDocument ? testDocument.name : 'Click to add a test document'}
          </span>
          <span className="mt-1 text-xs text-slate-400">PDF, PNG, or JPG up to 10MB</span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".pdf,.png,.jpg,.jpeg"
          onChange={handleFileChange}
        />
      </div>

      <div className="mb-8 flex flex-col items-center rounded-xl border border-slate-100 bg-slate-50 p-6">
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-500">
          <p className="text-2xl font-bold text-white">{progress}%</p>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          {isRunning ? 'Replaying against historical documents…' : 'Ready to replay the workflow against historical documents'}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-5">
        <button
          type="button"
          onClick={startShadowRun}
          disabled={isRunning}
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          {isRunning ? 'Running…' : 'Test Run'}
        </button>
        <button
          type="button"
          onClick={() => onNext(3)}
          className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
        >
          Continue to parity report
        </button>
      </div>
    </section>
  );
};

export default Step2ShadowRun;
export { Step2ShadowRun };
