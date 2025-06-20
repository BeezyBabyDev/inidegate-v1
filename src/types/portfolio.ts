export interface Investment {
  id: string;
  projectName: string;
  status: 'Completed' | 'Post-Production' | 'Distribution';
  commitment: number;
  fees: number;
  expenses: number;
  contributions: number;
} 