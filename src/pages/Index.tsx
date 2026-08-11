import { Fragment, useEffect, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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
                  Action
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
                const isUpgraded = isSalesOrder && migrationCompleted;
                const displayedVersion = isUpgraded ? 'v2' : workflow.version;

                return (
                  <Fragment key={workflow.name}>
                    <tr className="group">
                      <td className="px-5 py-5 align-middle text-sm font-semibold text-slate-900 sm:px-6">
                        {workflow.name}
                      </td>
                      <td className="px-4 py-5 align-middle">
                        <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                          {displayedVersion}
                        </span>
                      </td>
                      <td className="px-4 py-5 align-middle text-sm text-slate-600">
                        {workflow.lastExecuted}
                      </td>
                      <td className="px-4 py-5 align-middle">
                        {displayedVersion === 'v1' && (
                          <button
                            type="button"
                            onClick={() => navigate('/migration')}
                            className="rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                          >
                            Upgrade
                          </button>
                        )}

                        {isUpgraded && (
                          <button
                            type="button"
                            onClick={handleRollback}
                            className="rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-2 text-xs font-semibold text-amber-700 transition hover:border-amber-300 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2"
                          >
                            Rollback
                          </button>
                        )}

                        {workflow.version === 'v2' && !isUpgraded && (
                          <span className="text-sm font-semibold text-slate-500">
                            Upgraded
                          </span>
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

                    {isSalesOrder && reportExpanded && (
                      <tr className="bg-blue-50/50">
                        <td colSpan={5} className="px-5 py-5 sm:px-6">
                          <div className="rounded-xl border border-blue-200 bg-white p-5">
                            <h3 className="text-lg font-semibold text-slate-900">
                              Sales Order Management run details
                            </h3>

                            <div className="mt-4 grid gap-3 sm:grid-cols-3">
                              <div className="rounded-xl bg-slate-50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                  Tokens
                                </p>
                                <p className="mt-2 text-xl font-semibold text-slate-900">
                                  21345
                                </p>
                              </div>

                              <div className="rounded-xl bg-slate-50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                  API Calls
                                </p>
                                <p className="mt-2 text-xl font-semibold text-slate-900">
                                  11
                                </p>
                              </div>

                              <div className="rounded-xl bg-slate-50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                  Time
                                </p>
                                <p className="mt-2 text-xl font-semibold text-slate-900">
                                  23 secs
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Index;