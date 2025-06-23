export interface Project {
  id: number
  title: string
  posterUrl: string
  synopsis: string
  genre: string
  runtime: string
  targetAudience: string
  keyPersonnel: {
    director: string
    cast: string[]
    crew: string
  }
  production: {
    timeline: string
    milestones: string[]
    distribution: string
  }
  investmentRationale: {
    why: string
    marketOpportunity: string
    teamAssessment: string
    riskFactors: string
  }
  financials: {
    initialInvestment: number
    investmentDate: string
    terms: string
    currentValuation: number
    revenueStructure: string
    roiMethodology: string
    waterfall: string
  }
}
