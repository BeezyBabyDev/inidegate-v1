export interface Deal {
  id: string
  title: string
  genre: string
  stage: string
  director: string
  budget: number
  seeking: number
  equity: number
  estROI: number
  tag: {
    text: string
    style: 'hot' | 'featured' | 'limited' | 'pilot'
  }
}

export interface DealFlow {
  deals: Deal[]
}

export interface MarketTrend {
  id: string
  title: string
  category: string
  insight: string
}

export interface PortfolioData {
  totalValue: number
  change: number
  allocation: {
    equity: number
    debt: number
    revShare: number
  }
}

export interface QuickInsight {
  id: string
  title: string
  value: string
  change: number
}

export interface Investor {
  id: string
  name: string
  type: string
  interests: string[]
  avatar: string
}

export interface Notification {
  id: string
  message: string
  time: string
  read: boolean
}

export type DealMetric = {
  label: string
  value: string | number
}

export type DealStatus = 'Hot Deal' | 'Featured' | 'Limited Time' | 'New' | 'Pilot'

export interface DealCardProps {
  deal: Deal
  onSelect: (id: string) => void
}
