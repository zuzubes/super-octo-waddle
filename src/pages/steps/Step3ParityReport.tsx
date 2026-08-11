import React from 'react';
import { AlertTriangle, CheckCircle2, CircleDot, GitCompareArrows, Sparkles, XCircle } from 'lucide-react';

interface Step3ParityReportProps {
  onNext: (step: number) => void;
}

type AgentStatus = 'Completed' | 'Completed with differences' | 'Failed';

interface WorkflowAgent {
  name: string;
  version: string;
  type: 'Basic' | 'Agentic';
  customized: boolean;
  v1Status: AgentStatus;
  v2Status: AgentStatus;
  v1Duration: string;
  v2Duration: string;
}

const agents: WorkflowAgent[] = [
  {
    name: 'sales_order_extractor',
    version: '4.0',
    type: 'Basic',
    customized: false,
    v1Status: 'Completed',
    v2Status: 'Completed',
    v1Duration: '7s',
    v2Duration: '6s',
  },
  {
    name: 'sales_order_item_extractor',
    version: '4.0',
    type: 'Agentic',
    customized: true,
    v1Status: 'Completed',
    v2Status: 'Completed with differences',
    v1Duration: '21s',
    v2Duration: '24s',
  },
  {
    name: 'delivery_exception_handler',
    version: '2.0',
    type: 'Agentic',
    customized: true,
    v1Status: 'Completed',
    v2Status: 'Completed',
    v1Duration: '2s',
    v2Duration: '3s',
  },
  {
    name: 'sales_order_normalization',
    version: '2.0',
    type: 'Agentic',
    customized: true,
    v1Status: 'Completed',
    v2Status: 'Completed',
    v1Duration: '10s',
    v2Duration: '9s',
  },
  {
    name: 'sold_to_party_enrichment',
    version: '3.0',
    type: 'Agentic',
    customized: true,
    v1Status: 'Completed',
    v2Status: 'Completed with differences',
    v1Duration: '3s',
    v2Duration: '4s',
  },
  {
    name: 'shipping_address_enrichment',
    version: '5.0',
    type: 'Agentic',
    customized: true,
    v1Status: 'Completed',
    v2Status: 'Completed',
    v1Duration: '33s',
    v2Duration: '31s',
  },
  {
    name: 'product_matching',
    version: '4.0',
    type: 'Agentic',
    customized: true,
    v1Status: 'Completed',
    v2Status: 'Completed with differences',
    v1Duration: '66s',
    v2Duration: '61s',
  },
  {
    name: 'quote_line_matching',
    version: '4.0',
    type: 'Agentic',
    customized: true,
    v1Status: 'Completed',
    v2Status: 'Completed',
    v1Duration: '37s',
    v2Duration: '35s',
  },
];

const statusStyles: Record<AgentStatus, string> = {
  Completed: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  'Completed with differences': 'border-amber-200 bg-amber-50 text-amber-700',
  Failed: 'border-rose-200 bg-rose-50 text-rose-700',
};

const StatusIcon = ({ status }: { status: AgentStatus }) => {
  if (status === 'Completed') {
    return <CheckCircle2 className="h-4 w-4" />;
  }

  if (status === 'Failed') {
    return <XCircle className="h-4 w-4" />;
  }

  return <AlertTriangle className="h-4 w-4" />;
};

const Step3ParityReport = ({ onNext }: Step3ParityReportProps) => {
  const matchingAgents = agents.filter((agent) => agent.v1Status === agent.v2Status).length;
  const agentsWithDifferences = agents.length - matchingAgents;
  const customizedAgents = agents.filter((agent) => agent.customized).length;
  const v2Successes = agents.filter((agent) => agent.v2Status !== 'Failed').length;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">Step 3</p>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Agent run comparison</h3>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-violet-700">
            <GitCompareArrows className="h-3.5 w-3.5" />
            v1 vs v2
          </span>
        </div>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
          Compare the run status of every agent in the Sales order management workflow. Customized agents are highlighted so you can focus on the areas most likely to need review.
        </p>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Agents evaluated</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{agents.length}</p>
        </div>
        <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">Customized agents</p>
          <p className="mt-2 text-2xl font-bold text-violet-800">{customizedAgents}</p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Matching runs</p>
          <p className="mt-2 text-2xl font-bold text-emerald-800">{matchingAgents}</p>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">Need review</p>
          <p className="mt-2 text-2xl font-bold text-amber-800">{agentsWithDifferences}</p>
        </div>
      </div>

      <div className="mb-6 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 px-4 py-4">
        <CircleDot className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
        <div>
          <p className="text-sm font-semibold text-blue-900">Workflow run completed in v2</p>
          <p className="mt-1 text-sm leading-6 text-blue-800">
            {v2Successes} of {agents.length} agents completed successfully in v2. Differences are reported at the agent run level rather than by individual fields.
          </p>
        </div>
      </div>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h4 className="text-sm font-semibold text-slate-800">Workflow agents</h4>
          <p className="mt-1 text-xs text-slate-500">Agentic agents contain custom workflow logic.</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700">
          <Sparkles className="h-3.5 w-3.5" />
          Customized agent
        </span>
      </div>

      <div className="mb-8 overflow-hidden rounded-xl border border-slate-200">
        <div className="hidden grid-cols-[minmax(220px,1.5fr)_minmax(140px,1fr)_minmax(140px,1fr)] gap-4 border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 md:grid">
          <span>Agent</span>
          <span>v1 run result</span>
          <span>v2 run result</span>
        </div>

        <div className="divide-y divide-slate-100">
          {agents.map((agent) => {
            const hasDifference = agent.v1Status !== agent.v2Status;

            return (
              <div
                key={agent.name}
                className={`grid gap-4 px-4 py-4 md:grid-cols-[minmax(220px,1.5fr)_minmax(140px,1fr)_minmax(140px,1fr)] ${
                  hasDifference ? 'bg-amber-50/40' : 'bg-white'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="break-all text-sm font-semibold text-slate-900">{agent.name}</span>
                    <span className="text-xs text-slate-400">({agent.version})</span>
                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                        agent.customized
                          ? 'bg-violet-100 text-violet-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {agent.type}
                    </span>
                    {agent.customized && <Sparkles className="h-3.5 w-3.5 text-violet-500" />}
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    {agent.customized ? 'Customized workflow agent' : 'Standard workflow agent'}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400 md:hidden">v1 run result</p>
                  <span className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold ${statusStyles[agent.v1Status]}`}>
                    <StatusIcon status={agent.v1Status} />
                    {agent.v1Status}
                  </span>
                  <p className="mt-1 text-xs text-slate-500">Completed in {agent.v1Duration}</p>
                </div>

                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400 md:hidden">v2 run result</p>
                  <span className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold ${statusStyles[agent.v2Status]}`}>
                    <StatusIcon status={agent.v2Status} />
                    {agent.v2Status}
                  </span>
                  <p className="mt-1 text-xs text-slate-500">Completed in {agent.v2Duration}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end border-t border-slate-100 pt-5">
        <button
          type="button"
          onClick={() => onNext(4)}
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Continue to approval
        </button>
      </div>
    </section>
  );
};

export default Step3ParityReport;
export { Step3ParityReport };