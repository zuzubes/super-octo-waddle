// SequenceMap Component

import React from 'react';
import { CheckCircle, Circle, AlertCircle, Clock, XCircle } from 'lucide-react';

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
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'active':
        return <Clock className="w-6 h-6 text-blue-500" />;
      case 'pending':
        return <Circle className="w-6 h-6 text-gray-400" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStepColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 border-green-500';
      case 'active':
        return 'bg-blue-50 border-blue-500';
      case 'pending':
        return 'bg-gray-50 border-gray-400';
      default:
        return 'bg-gray-50 border-gray-400';
    }
  };

  const getStepLabel = (step: number) => {
    const labels = [
      'Select Workflow',
      'Shadow Run',
      'Parity Report',
      'Route by Result',
      'Cutover + Rollback',
      'Customer Artifact',
    ];
    return labels[step - 1] || `Step ${step}`;
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Migration Workflow</h2>
        <div className="flex gap-2">
          <button
            onClick={() => canGoBack && currentStep > 1 && onStepChange(currentStep - 1)}
            disabled={!canGoBack || currentStep === 1}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${canGoBack && currentStep > 1
                ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
          >
            Previous
          </button>
          <button
            onClick={canCancel ? () => window.location.href = '/' : undefined}
            disabled={!canCancel}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${canCancel
                ? 'bg-red-100 text-red-800 hover:bg-red-200'
                : 'bg-red-50 text-red-400 cursor-not-allowed'
              }`}
          >
            Cancel
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0" />
        <div className="flex justify-between relative z-10">
          {Array.from({ length: steps }, (_, index) => {
            const step = index + 1;
            const status = getStepStatus(step);
            return (
              <div
                key={step}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => onStepChange(step)}
              >
                <div
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 transition-all ${getStepColor(status)} ${status === 'active' ? 'scale-110' : ''}
                  ${status === 'completed' ? 'cursor-pointer hover:scale-105' : 'cursor-default'}
                  `}
                >
                  {getStepIcon(status)}
                </div>
                <span
                  className={`text-sm font-medium ${status === 'active' ? 'text-blue-600' : status === 'completed' ? 'text-green-600' : 'text-gray-500'}
                  `}
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