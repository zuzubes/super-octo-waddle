// Step 1: Select Cohort

import React, { useState } from 'react';

const Step1SelectCohort = ({ onNext }) => {
  const [selectedWorkflows, setSelectedWorkflows] = useState([]);
  const [selectedCohorts, setSelectedCohorts] = useState([]);

  const handleWorkflowSelect = (workflowId: string) => {
    setSelectedWorkflows(prev => [...prev, workflowId]);
  };

  const handleCohortSelect = (cohortId: string) => {
    setSelectedCohorts(prev => [...prev, cohortId]);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Select Workflows and Cohorts</h3>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700">Workflows</h4>
        <div className="flex flex-wrap gap-2">
          {workflows.map(workflow => (
            <div
              key={workflow.id}
              className="border border-gray-300 p-2 rounded-md cursor-pointer"
              onClick={() => handleWorkflowSelect(workflow.id)}
            >
              <p className="text-sm">{workflow.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700">Cohorts</h4>
        <div className="flex flex-wrap gap-2">
          {cohorts.map(cohort => (
            <div
              key={cohort.id}
              className="border border-gray-300 p-2 rounded-md cursor-pointer"
              onClick={() => handleCohortSelect(cohort.id)}
            >
              <p className="text-sm">{cohort.name}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          if (selectedWorkflows.length > 0 && selectedCohorts.length > 0) {
            onNext(2);
          }
        }}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Step1SelectCohort;