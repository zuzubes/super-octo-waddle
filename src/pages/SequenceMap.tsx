// SequenceMap Component

import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

interface SequenceMapProps {
  steps: number;
  currentStep: number;
  onStepChange: (step: number) => void;
  canGoBack: boolean;
  canCancel: boolean;
}

const SequenceMap: React.FC<SequenceMapProps> = ({
  steps,
  currentStep,
  onStepChange,
  canGoBack,
  canCancel,
}) => {
  const getStepStatus = (step: number) => {
    if (step < currentStep) return 'completed';
    if (step === currentStep) return 'active';
    return 'pending';
  };

  const getStepIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'active':
        return <Clock className="h-6 w-6 text-blue-500" />;
      case 'pending':
        return <Circle className="h-6 w-6 text-gray-400" />;
      default:
        return <Circle className="h-6 w-6 text-gray-400" />;
    }
  };

  const getStepColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50';
      case 'active':
        return 'border-blue-500 bg-blue-50';
      case 'pending':
        return 'border-gray-400 bg-gray-50';
      default:
        return 'border-gray-400 bg-gray-50';
    }
  };

  const getStepLabel = (step: number) => {
    const labels = [
      'Select Workflow',
      'Shadow Run',
      'Parity checks',
      'Approval',
      'Rollback window',
      'Reports',
    ];
    return labels[step - 1] || `Step ${step}`;
  };

  return (
    <div className="w-full rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Migration Workflow</h2>
        <div className="flex gap-2">
          <button
            onClick={() => canGoBack && currentStep > 1 && onStepChange(currentStep - 1)}
            disabled={!canGoBack || currentStep === 1}
            className={`rounded-md px-4 py-2 font-medium transition-colors ${
              canGoBack && currentStep > 1
                ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                : 'cursor-not-allowed bg-gray-100 text-gray-400'
            }`}
          >
            Previous
          </button>
          <button
            onClick={canCancel ? () => (window.location.href = '/') : undefined}
            disabled={!canCancel}
            className={`rounded-md px-4 py-2 font-medium transition-colors ${
              canCancel
                ? 'bg-red-100 text-red-800 hover:bg-red-200'
                : 'cursor-not-allowed bg-red-50 text-red-400'
            }`}
          >
            Cancel
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 z-0 h-0.5 -translate-y-1/2 transform bg-gray-200" />
        <div className="relative z-10 flex justify-between">
          {Array.from({ length: steps }, (_, index) => {
            const step = index + 1;
            const status = getStepStatus(step);

            return (
              <div
                key={step}
                className="flex cursor-pointer flex-col items-center"
                onClick={() => onStepChange(step)}
              >
                <div
                  className={`mb-2 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${
                    getStepColor(status)
                  } ${
                    status === 'active' ? 'scale-110' : ''
                  } ${
                    status === 'completed'
                      ? 'cursor-pointer hover:scale-105'
                      : 'cursor-default'
                  }`}
                >
                  {getStepIcon(status)}
                </div>
                <span
                  className={`text-sm font-medium ${
                    status === 'active'
                      ? 'text-blue-600'
                      : status === 'completed'
                        ? 'text-green-600'
                        : 'text-gray-500'
                  }`}
                >
                  {getStepLabel(step)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { SequenceMap };
export default SequenceMap;