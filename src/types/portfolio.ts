export interface Transaction {
  id: string
  date: string
  type: 'Contribution' | 'Distribution' | 'Fee'
  amount: number
}

export interface Investment {
  id: string
  projectName: string
  status: 'Completed' | 'Post-Production' | 'Distribution' | 'In Production'
  commitment: number
  fees: number
  expenses: number
  contributions: number
  detailedROI: {
    grossRevenue: number
    netProfit: number
    percentage: number
  }
  cashFlow: Array<{ month: string; inflow: number; outflow: number }>
  transactionHistory: Transaction[]
}
