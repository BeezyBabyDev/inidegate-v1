import { Investment } from '../types/portfolio';

export const portfolioStats = {
  totalInvested: 12800000,
  totalCommitments: 15200000,
  filmsFinanced: 24,
  averageROI: 315,
};

export const recentInvestments: Investment[] = [
  {
    id: 'inv-1',
    projectName: 'The Silent Hour',
    status: 'Completed',
    commitment: 850000,
    fees: 42500,
    expenses: 78200,
    contributions: 729300,
  },
  {
    id: 'inv-2',
    projectName: 'City of Dreams',
    status: 'Post-Production',
    commitment: 1200000,
    fees: 60000,
    expenses: 124800,
    contributions: 1015000,
  },
  {
    id: 'inv-3',
    projectName: 'Broken Chains',
    status: 'Distribution',
    commitment: 650000,
    fees: 32500,
    expenses: 89700,
    contributions: 527800,
  },
]; 