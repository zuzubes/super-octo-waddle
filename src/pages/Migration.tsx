// Migration Page Component

import React, { useState } from 'react';
import { SequenceMap } from './SequenceMap';
import { 
  Step1SelectCohort, 
  Step2ShadowRun, 
  Step3ParityReport, 
  Step4RouteResult, 
  Step5Cutover, 
  Step6CustomerArtifact 
} from './steps';
import DashboardLayout from '@/layouts/DashboardLayout';

const Migration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canCancel, setCanCancel] = useState(true);

  const handleStepChange = (step: number) => {
    if (step > currentStep) {
      setCanGoBack(true);
    } else {
      setCanGoBack(false);
    }
    setCurrentStep(step);
  };

  const handleCancel = () => {
    setCanCancel(false);
  };

  return (
    <DashboardLayout>
      <div className="w-full">
        <SequenceMap
          steps={6}
          currentStep={currentStep}
          onStepChange={handleStepChange}
          canGoBack={canGoBack}
          canCancel={canCancel}
        />
        <div className="mt-8">
          {currentStep === 1 && <Step1SelectCohort onNext={handleStepChange} />}
          {currentStep === 2 && <Step2ShadowRun onNext={handleStepChange} />}
          {currentStep === 3 && <Step3ParityReport onNext={handleStepChange} />}
          {currentStep === 4 && <Step4RouteResult onNext={handleStepChange} />}
          {currentStep === 5 && <Step5Cutover onNext={handleStepChange} />}
          {currentStep === 6 && <Step6CustomerArtifact onCancel={handleCancel} />}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Migration;