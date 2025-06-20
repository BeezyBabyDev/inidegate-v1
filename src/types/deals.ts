export interface Deal {
  id: string
  title: string
  genre: string
  stage: string
  director: string
  budget: number
  seeking: number
  equity: number
  roi: number
  status: 'Hot Deal' | 'Featured' | 'Limited Time' | 'New'
}
