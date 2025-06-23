import { Project } from '../types/project'
import { Investment } from '../types/portfolio'

export const portfolioData: Project[] = [
  {
    id: 1,
    title: 'The Silent Hour',
    posterUrl: 'https://images.unsplash.com/photo-1594904533828-7806143d7a47?q=80&w=600',
    synopsis:
      'In a city where noise is currency, a sound-sensitive musician must uncover a conspiracy of silence to save her community from a corporation that controls all sonic landscapes.',
    genre: 'Sci-Fi Thriller',
    runtime: '112 min',
    targetAudience: '18-35, fans of dystopian sci-fi and arthouse thrillers.',
    keyPersonnel: {
      director: 'Elara Vance',
      cast: ['Anya Sharma', 'Leo Jin', 'Seraphina Cruz'],
      crew: "Cinematographer: Kenji Tanaka, Composer: Finn O'Connell",
    },
    production: {
      timeline: 'Completed Q4 2023',
      milestones: ['Sundance 2024 Premiere', 'Global Distribution Deal with Neon'],
      distribution:
        "Theatrical release in North America & Europe, followed by SVOD on A24's platform.",
    },
    investmentRationale: {
      why: 'Unique high-concept premise with strong commercial appeal and a visionary first-time director. The script was a Black List favorite, and the attached cast has a proven track record in the indie space. The project addresses relevant themes of corporate control and artistic freedom.',
      marketOpportunity:
        'Fills a gap for intelligent, adult-oriented sci-fi in a market saturated with blockbusters. Strong potential for critical acclaim to drive box office performance.',
      teamAssessment:
        "Director Elara Vance's award-winning short film demonstrated a mastery of tone and visual storytelling. Producers have a history of delivering projects on time and on budget.",
      riskFactors:
        'First-time feature director and a potentially niche concept. Mitigated by a tight budget, experienced department heads, and pre-sales in key international territories.',
    },
    financials: {
      initialInvestment: 750000,
      investmentDate: '2022-08-15',
      terms: '20% equity stake, preferred return at 120%',
      currentValuation: 1200000,
      revenueStructure:
        'Tiered revenue sharing post-recoupment, with bonuses for box office milestones.',
      roiMethodology:
        'Calculated based on net profits after all distribution fees, marketing costs, and production expenses are recouped.',
      waterfall: 'Negotiable, but investors will have a priority return structure.',
    },
  },
  {
    id: 2,
    title: 'City of Dreams',
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600',
    synopsis:
      'A struggling jazz pianist in New York City discovers a hidden portal to a vibrant, dream-like version of the city, forcing him to choose between his aspirations and the love he finds there.',
    genre: 'Musical Romance',
    runtime: '128 min',
    targetAudience: '25-55, fans of La La Land, classic movie musicals, and romantic dramas.',
    keyPersonnel: {
      director: 'Marcus Cole',
      cast: ['Javier Luna', 'Simone Dubois', 'Franklin Hayes'],
      crew: 'Choreographer: Dana Lin, Songwriter: The melody Brothers',
    },
    production: {
      timeline: 'Post-Production',
      milestones: ['Secured distribution with Lionsgate', 'Soundtrack pre-release on Spotify'],
      distribution: 'Wide theatrical release planned for holiday season 2024.',
    },
    investmentRationale: {
      why: "Classic Hollywood feel with a modern twist. The director's previous musical was a critical and commercial success. Original songs are incredibly catchy and have strong potential for awards.",
      marketOpportunity:
        'High demand for feel-good, aspirational content. Musicals have shown strong box office resilience and long-term value through soundtracks and stage adaptations.',
      teamAssessment:
        'Director and music team are a proven combination. Lead actors are rising stars with significant social media followings.',
      riskFactors:
        'Musicals are expensive to produce. Success is heavily reliant on the quality of the music and audience reception. Mitigated by securing a star choreographer and extensive rehearsal periods.',
    },
    financials: {
      initialInvestment: 1200000,
      investmentDate: '2023-01-20',
      terms: '25% equity, structured as gap financing.',
      currentValuation: 1500000,
      revenueStructure: 'Standard pro-rata share of net profits.',
      roiMethodology: 'Based on global box office, streaming rights, and soundtrack sales.',
      waterfall: 'Standard industry waterfall with producer and investor shares aligned.',
    },
  },
  {
    id: 3,
    title: 'Broken Chains',
    posterUrl: 'https://images.unsplash.com/photo-1505664115085-5a7e63b61145?q=80&w=600',
    synopsis:
      'A wrongly convicted man, after spending 20 years in solitary confinement, must navigate a changed world and confront the real culprit who framed him, all while being haunted by the ghosts of his past.',
    genre: 'Crime Drama',
    runtime: '135 min',
    targetAudience: '30+, fans of slow-burn crime thrillers and character-driven dramas.',
    keyPersonnel: {
      director: 'Renée Dubois',
      cast: ['Idris Elba (lookalike)', 'Naomi Scott (lookalike)'],
      crew: 'Writer: Samuel Gage (based on his acclaimed novel)',
    },
    production: {
      timeline: 'In Production',
      milestones: ['Secured A-list talent', 'Filming on location in Louisiana'],
      distribution:
        'Seeking distribution. In talks with Netflix and HBO for a potential acquisition.',
    },
    investmentRationale: {
      why: 'Powerful, timely story based on an award-winning novel. The attached lead actor is a major box office draw and has a passion for the project. Strong potential for major awards consideration.',
      marketOpportunity:
        'Crime dramas with strong lead performances consistently perform well on streaming platforms. The source material already has a built-in audience.',
      teamAssessment:
        'Director Renée Dubois is known for extracting powerful performances. The writer is adapting his own work, ensuring the script remains true to the source.',
      riskFactors:
        'The subject matter is heavy and may not have broad four-quadrant appeal. Dependent on a strong festival run to generate buzz for a distribution deal.',
    },
    financials: {
      initialInvestment: 2000000,
      investmentDate: '2023-06-05',
      terms: '30% equity, first-in last-out position.',
      currentValuation: 2200000,
      revenueStructure:
        'To be determined by distribution deal. Aiming for a significant minimum guarantee.',
      roiMethodology: 'Projections based on comparable film sales to major streaming services.',
      waterfall: 'Negotiable, but investors will have a priority return structure.',
    },
  },
]

export const recentInvestments: Investment[] = portfolioData.map(p => ({
  id: p.id.toString(),
  projectName: p.title,
  status: p.production.timeline as 'Completed' | 'Post-Production' | 'Distribution',
  commitment: p.financials.initialInvestment,
  fees: 0, // Placeholder
  expenses: 0, // Placeholder
  contributions: p.financials.initialInvestment, // Placeholder
}))

export const portfolioStats: {
  totalInvested: number
  totalCommitments: number
  filmsFinanced: number
  averageROI: number
} = {
  totalInvested: portfolioData.reduce((acc, p) => acc + p.financials.initialInvestment, 0),
  totalCommitments: portfolioData.reduce((acc, p) => acc + p.financials.initialInvestment, 0),
  filmsFinanced: portfolioData.length,
  averageROI: 315, // Placeholder
}
