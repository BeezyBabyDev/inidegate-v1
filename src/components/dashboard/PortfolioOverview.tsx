import React from 'react';
import { portfolioStats, recentInvestments } from '../../data/portfolioData';

const formatCurrency = (value: number) => {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`;
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(1)}K`;
  }
  return `$${value}`;
};

const formatNumber = (value: number) => {
    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(3)}M`;
    }
    if (value >= 1_000) {
      return `${(value / 1_000).toFixed(1)}K`;
    }
    return value.toString();
  };

const StatCard = ({ title, value, bgColor }: { title: string, value: string, bgColor: string }) => (
  <div className={`p-4 rounded-xl ${bgColor}`}>
    <p className="text-sm text-white/80">{title}</p>
    <p className="text-2xl font-bold text-white">{value}</p>
  </div>
);

const StatusPill = ({ status }: { status: string }) => {
    let color = '';
    switch (status) {
      case 'Completed':
        color = 'bg-blue-500/30 text-blue-200';
        break;
      case 'Post-Production':
        color = 'bg-yellow-500/30 text-yellow-200';
        break;
      case 'Distribution':
        color = 'bg-purple-500/30 text-purple-200';
        break;
    }
    return <span className={`px-2 py-1 text-xs font-semibold rounded-full ${color}`}>{status}</span>;
};

const PortfolioOverview = () => {
    const totalCommitments = recentInvestments.reduce((acc, inv) => acc + inv.commitment, 0);
    const totalFees = recentInvestments.reduce((acc, inv) => acc + inv.fees, 0);
    const totalExpenses = recentInvestments.reduce((acc, inv) => acc + inv.expenses, 0);
    const netContributions = recentInvestments.reduce((acc, inv) => acc + inv.contributions, 0);

  return (
    <div className="text-white">
      {/* Top Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Invested" value={formatCurrency(portfolioStats.totalInvested)} bgColor="bg-green-500/30" />
        <StatCard title="Total Commitments" value={formatCurrency(portfolioStats.totalCommitments)} bgColor="bg-blue-500/30" />
        <StatCard title="Films Financed" value={portfolioStats.filmsFinanced.toString()} bgColor="bg-purple-500/30" />
        <StatCard title="Average ROI" value={`${portfolioStats.averageROI}%`} bgColor="bg-indigo-500/30" />
      </div>

      {/* Recent Investments Table */}
      <h4 className="text-lg font-semibold mb-3">Recent Investments</h4>
      <div className="bg-white/5 rounded-lg p-1">
        <div className="hidden md:grid grid-cols-6 gap-4 text-xs text-purple-200/80 p-2 border-b border-white/10">
            <div className="col-span-1">Project Name</div>
            <div>Status</div>
            <div className="text-right">Commitment</div>
            <div className="text-right">Fees</div>
            <div className="text-right">Expenses</div>
            <div className="text-right">Contributions</div>
        </div>
        <div className="space-y-2">
            {recentInvestments.map(inv => (
                 <div key={inv.id} className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center p-2 rounded-md hover:bg-white/5">
                    <div className="md:col-span-1 font-semibold">{inv.projectName}</div>
                    <div className="flex md:justify-start"><StatusPill status={inv.status} /></div>
                    <div className="text-right font-mono">{formatCurrency(inv.commitment)}</div>
                    <div className="text-right font-mono">{formatCurrency(inv.fees)}</div>
                    <div className="text-right font-mono">{formatCurrency(inv.expenses)}</div>
                    <div className="text-right font-mono">{formatCurrency(inv.contributions)}</div>
                 </div>
            ))}
        </div>
      </div>
       {/* Totals Footer */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 bg-white/5 p-4 rounded-lg">
            <div>
                <p className="text-xs text-purple-200/80">Total Commitments</p>
                <p className="font-bold text-lg">{formatCurrency(totalCommitments)}</p>
            </div>
            <div>
                <p className="text-xs text-purple-200/80">Total Fees</p>
                <p className="font-bold text-lg">{formatCurrency(totalFees)}</p>
            </div>
            <div>
                <p className="text-xs text-purple-200/80">Total Expenses</p>
                <p className="font-bold text-lg">{formatCurrency(totalExpenses)}</p>
            </div>
            <div>
                <p className="text-xs text-purple-200/80">Net Contributions</p>
                <p className="font-bold text-lg">{formatCurrency(netContributions)}</p>
            </div>
       </div>
    </div>
  );
};

export default PortfolioOverview;
