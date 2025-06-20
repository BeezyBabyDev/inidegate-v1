import { Deal } from '../types/deals'

export const dealFlow: Deal[] = [
  {
    id: 'deal-1',
    title: 'Midnight in Brooklyn',
    genre: 'Drama',
    stage: 'Pre-Production',
    director: 'Sarah Chen',
    budget: 2800000,
    seeking: 1200000,
    equity: 15,
    estROI: 280,
    tag: {
      text: 'Hot Deal',
      style: 'hot',
    }
  },
  {
    id: 'deal-2',
    title: 'Digital Nomad',
    genre: 'Thriller',
    stage: 'Development',
    director: 'Mike Rodriguez',
    budget: 1500000,
    seeking: 750000,
    equity: 12,
    estROI: 320,
    tag: {
      text: 'Featured',
      style: 'featured',
    },
  },
  {
    id: 'deal-3',
    title: 'The Last Record Store',
    genre: 'Documentary',
    stage: 'Production',
    director: 'Alex Kim',
    budget: 500000,
    seeking: 250000,
    equity: 20,
    estROI: 180,
    tag: {
      text: 'Limited',
      style: 'limited',
    },
  },
  {
    id: 'deal-4',
    title: 'Beneath them, The Lambs',
    genre: 'Thriller',
    stage: 'Pilot',
    director: 'Jane Doe',
    budget: 750000,
    seeking: 300000,
    equity: 25,
    estROI: 220,
    tag: {
      text: 'Pilot',
      style: 'pilot',
    },
  }
];
