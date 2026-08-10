// Step 1: Select Cohort

import React, { useState } from 'react';

const Step1SelectCohort = ({ onNext }) => {
  const [selectedWorkflows, setSelectedWorkflows] = useState([]);
  const [selectedCohorts, setSelectedCohorts] = useState([]);

  // Sample data for workflows and cohorts
  const workflows = [
    { id: 'wf-001', name: 'Invoice Processing' },
    { id: 'wf-002', name: 'Purchase Order Matching' },
    { id: 'wf-003', name: 'Employee Onboarding' },
    { id: 'wf-004', name: 'Expense Report Approval' }
  ];

  const cohorts = [
    { id: 'cohort-001', name: 'Q1 2024 Batch' },
    { id: 'cohort-002', name: 'Q2 2024 Batch' },
    { id: 'cohort-003', name: 'Q3 2024 Batch' },
    { id: 'cohort-004', name: 'Q4 2024 Batch' }
  ];

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