import DashboardLayout from '@/layouts/DashboardLayout';
import AnnouncementBanner from '@/components/AnnouncementBanner';

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
  return (
    <DashboardLayout>
      <AnnouncementBanner />

      <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
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
          <table className="w-full min-w-[680px] text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:px-6">
                  Workflow name
                </th>
                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Version
                </th>
                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Last executed on
                </th>
                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Rollback
                </th>
                <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Report
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {workflows.map((workflow) => (
                <tr
                  key={workflow.name}
                  className="transition-colors hover:bg-blue-50/30"
                >
                  <td className="px-5 py-4 text-sm font-semibold text-slate-900 sm:px-6">
                    {workflow.name}
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                      {workflow.version}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600">
                    {workflow.lastExecuted}
                  </td>
                  <td className="px-5 py-4" />
                  <td className="px-5 py-4" />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Index;