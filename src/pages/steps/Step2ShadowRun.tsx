// Step 2: Shadow Run

import React, { useRef, useState } from 'react';
import { Check, FileUp, History } from 'lucide-react';

interface Step2ShadowRunProps {
  onNext: (step: number) => void;
}

const Step2ShadowRun = ({ onNext }: Step2ShadowRunProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [testDocument, setTestDocument] = useState<File | null>(null);
  const [documentSource, setDocumentSource] = useState<'history' | 'upload'>('history');
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
    const file = event.target.files?.[0] ?? null;

    if (file) {
      setTestDocument(file);
      setDocumentSource('upload');
    }
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Step 2</p>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Shadow run</h3>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
            Running in v2
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-500">
          Test the upgraded workflow using the most recent document from your v1 history or upload a document manually.
        </p>
      </div>

      <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 px-4 py-4">
        <p className="text-sm font-semibold text-blue-900">Your workflow is now running in v2</p>
        <p className="mt-1 text-sm leading-6 text-blue-800">
          By default, we will use the last document processed by the v1 workflow from its history and replay it through v2 for comparison. You can also upload a different document below.
        </p>
      </div>

      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-slate-800">Choose a test document</h4>
          <span className="text-xs text-slate-400">
            {documentSource === 'upload' ? 'Uploaded document selected' : 'v1 history selected'}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <button
            type="button"
            onClick={() => {
              setDocumentSource('history');
              setTestDocument(null);
            }}
            className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
              documentSource === 'history'
                ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-100'
                : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/40'
            }`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
              <History className="h-5 w-5" />
            </span>
            <span className="flex-1">
              <span className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-slate-900">Use last v1 document</span>
                {documentSource === 'history' && <Check className="h-4 w-4 text-blue-600" />}
              </span>
              <span className="mt-1 block text-xs leading-5 text-slate-500">
                Automatically use the latest document from the v1 workflow history.
              </span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
              documentSource === 'upload'
                ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-100'
                : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/40'
            }`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
              <FileUp className="h-5 w-5" />
            </span>
            <span className="flex-1">
              <span className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-slate-900">Upload a document</span>
                {documentSource === 'upload' && <Check className="h-4 w-4 text-blue-600" />}
              </span>
              <span className="mt-1 block text-xs leading-5 text-slate-500">
                Choose a PDF, PNG, JPG, or JPEG from your device.
              </span>
            </span>
          </button>
        </div>

        {documentSource === 'upload' && (
          <div className="mt-3 rounded-xl border border-dashed border-blue-300 bg-blue-50/50 px-4 py-3">
            <p className="text-sm font-medium text-blue-900">
              {testDocument ? testDocument.name : 'No document selected yet'}
            </p>
            <p className="mt-1 text-xs text-blue-700">
              {testDocument ? 'This document will be replayed through the v2 workflow.' : 'Select a document to use for the test run.'}
            </p>
          </div>
        )}

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
          {isRunning
            ? `Replaying ${documentSource === 'upload' && testDocument ? testDocument.name : 'the last v1 history document'} through v2…`
            : `Ready to replay ${documentSource === 'upload' && testDocument ? testDocument.name : 'the last v1 history document'} through v2`}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-5">
        <button
          type="button"
          onClick={startShadowRun}
          disabled={isRunning || (documentSource === 'upload' && !testDocument)}
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