import { useEffect, useState } from 'react';
import { ChevronDown, ChevronRight, RotateCcw } from 'lucide-react';
import DashboardLayout from '@/layouts/DashboardLayout';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import { showSuccess } from '@/utils/toast';

const workflows = [
  {
    name: 'Invoice Processing',
    version: 'v1',
    lastExecuted: '08.08.2026',
  },
  {
    name: 'Sales Order Management',
    version: 'v1',
    lastExecuted: '11.08.2026',
  },
  {
    name: 'Purchase Order Matching',
    version: 'v1',
    lastExecuted: '11.08.2026',
  },
  {
    name: 'Expense Report Approval',
    version: 'v2',
    lastExecuted: '11.08.2026',
  },
];

const Index = () => {
  const [migrationCompleted, setMigrationCompleted] = useState(false);
  const [reportExpanded, setReportExpanded] = useState(false);

  useEffect(() => {
    setMigrationCompleted(
      window.localStorage.getItem('salesOrderMigrationCompleted') === 'true',
    );
  }, []);

  const handleRollback = () => {
    window.localStorage.removeItem('salesOrderMigrationCompleted');
    setMigrationCompleted(false);
    showSuccess('Sales Order Management has been rolled back.');
  };

  return (
    <DashboardLayout>
      <AnnouncementBanner />

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
            Workflow overview
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
            Workflows
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Monitor the latest execution details for your workflows.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] table-fixed text-left">
            <colgroup>
              <col className="w-[30%]" />
              <col className="w-[13%]" />
              <col className="w-[20%]" />
              <col className="w-[16%]" />
              <col className="w-[21%]" />
            </colgroup>
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-6">
                  Workflow name
                </th>
                <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Version
                </th>
                <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Last executed on
                </th>
                <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Rollback
                </th>
                <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Report
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {workflows.map((workflow) => {
                const isSalesOrder =
                  workflow.name === 'Sales Order Management';

                return (
                  <tr key={workflow.name} className="group">
                    <td className="px-5 py-5 align-middle text-sm font-semibold text-slate-900 sm:px-6">
                      {workflow.name}
                    </td>
                    <td className="px-4 py-5 align-middle">
                      <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                        {workflow.version}
                      </span>
                    </td>
                    <td className="px-4 py-5 align-middle text-sm text-slate-600">
                      {workflow.lastExecuted}
                    </td>
                    <td className="px-4 py-5 align-middle">
                      {isSalesOrder && migrationCompleted && (
                        <button
                          type="button"
                          onClick={handleRollback}
                          aria-label="Rollback Sales Order Management"
                          title="Rollback workflow"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 text-amber-700 transition hover:border-amber-300 hover:bg-amber-100"
                        >
                          <RotateCcw className="h-5 w-5" />
                        </button>
                      )}
                    </td>
                    <td className="px-4 py-5 align-middle">
                      {isSalesOrder && (
                        <button
                          type="button"
                          onClick={() =>
                            setReportExpanded((expanded) => !expanded)
                          }
                          className="inline-flex items-center gap-1.5 text-left text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                          aria-expanded={reportExpanded}
                        >
                          {reportExpanded ? (
                            <ChevronDown className="h-4 w-4 shrink-0" />
                          ) : (
                            <ChevronRight className="h-4 w-4 shrink-0" />
                          )}
                          <span>View Report</span>
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>

            {reportExpanded && (
              <tbody>
                <tr className="bg-blue-50/50">
                  <td colSpan={5} className="px-5 py-5 sm:px-6">
                    <div className="rounded-xl border border-blue-100 bg-white p-4">
                      <h3 className="text-sm font-semibold text-slate-900">
                        Sales Order Management run details
                      </h3>
                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        <div className="rounded-lg bg-slate-50 p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            v1 run
                          </p>
                          <p className="mt-1 text-sm font-medium text-emerald-700">
                            Completed in 21s
                          </p>
                        </div>
                        <div className="rounded-lg bg-slate-50 p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            v2 run
                          </p>
                          <p className="mt-1 text-sm font-medium text-amber-700">
                            Completed with differences in 24s
                          </p>
                        </div>
                        <div className="rounded-lg bg-slate-50 p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            Agents reviewed
                          </p>
                          <p className="mt-1 text-sm font-medium text-slate-700">
                            8 agents evaluated
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Index;