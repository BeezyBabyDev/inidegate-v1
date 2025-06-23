export const matchingStats = {
  qualityMatches: 3,
  minCompatibility: 71,
  liked: 0,
  saved: 0,
  avgMatch: 86,
}

export const projectMatches = [
  {
    id: 'proj_001',
    title: 'Indie Drama Feature',
    company: 'Sunset Pictures',
    match: 94,
    location: 'Los Angeles, CA',
    budget: '$800K - $1.2M',
    verified: true,
    urgent: true,
    logline:
      'Seeking lead actress for psychological drama about identity and memory. Character-driven story requiring emotional range and method acting skills.',
    matchBreakdown: [
      { reason: 'Genre Alignment (Drama)', value: 40 },
      { reason: 'Budget Range Match', value: 30 },
      { reason: 'Location Preference', value: 15 },
      { reason: 'Director Track Record', value: 9 },
    ],
    details: {
      synopsis:
        'A renowned memory artist who can physically manifest people’s recollections discovers a dark secret in her own past, forcing her to question the very nature of her reality and the powerful corporation that controls her gift.',
      budgetBreakdown: [
        { item: 'Cast & Talent', amount: 350000, percentage: 35 },
        { item: 'Production Crew', amount: 250000, percentage: 25 },
        { item: 'Locations & Permits', amount: 100000, percentage: 10 },
        { item: 'Post-Production & VFX', amount: 150000, percentage: 15 },
        { item: 'Marketing & Distribution', amount: 100000, percentage: 10 },
        { item: 'Contingency', amount: 50000, percentage: 5 },
      ],
      keyTalent: [
        { name: 'Danielle Cherry', role: 'Director', link: '#' },
        { name: 'Javier Bardem (LOI)', role: 'Lead Actor', link: '#' },
      ],
      brandPlacement: ['Luxury Vehicles', 'High-end Smartphones', 'Designer Fashion'],
      distribution: ['Theatrical (Limited)', 'Major Streaming Platform Interest (Netflix, A24)'],
    },
  },
  {
    id: 'proj_002',
    title: 'Sci-Fi Animated Series',
    company: 'GalaxyToons',
    match: 88,
    location: 'Remote',
    budget: '$2.5M - $4M',
    verified: true,
    urgent: false,
    logline:
      'An animated series following a ragtag group of space explorers who stumble upon an ancient secret that could unravel the galaxy.',
    matchBreakdown: [
      { reason: 'Genre Alignment (Sci-Fi)', value: 45 },
      { reason: 'Budget Range Match', value: 25 },
      { reason: 'Remote Investment OK', value: 10 },
      { reason: 'Animation Studio Reputation', value: 8 },
    ],
    details: {
      synopsis:
        'In a distant galaxy, the quirky crew of the starship "Wanderer" makes a living on odd jobs. Their lives are turned upside down when they find a map leading to the legendary "Star-Forge," an artifact with the power to create or destroy worlds. Now, they must outrun the tyrannical Dominion fleet and unlock the forge\'s secrets before the galaxy is plunged into eternal darkness.',
      budgetBreakdown: [
        { item: 'Animation & Art', amount: 1500000, percentage: 50 },
        { item: 'Voice Talent', amount: 600000, percentage: 20 },
        { item: 'Writing & Storyboarding', amount: 450000, percentage: 15 },
        { item: 'Sound & Music', amount: 300000, percentage: 10 },
        { item: 'Overhead & Contingency', amount: 150000, percentage: 5 },
      ],
      keyTalent: [
        { name: 'Tara Strong (Voice)', role: 'Lead Character', link: '#' },
        { name: 'John DiMaggio (Voice)', role: 'Supporting Character', link: '#' },
      ],
      brandPlacement: ['Futuristic Gadgets', 'Energy Drinks', 'Spaceship Insurance'],
      distribution: ['Global Streaming Service (e.g., Disney+, Netflix)'],
    },
  },
  {
    id: 'proj_003',
    title: 'Gritty Noir Thriller',
    company: 'Shadowplay Films',
    match: 79,
    location: 'New York, NY',
    budget: '$500K - $900K',
    verified: false,
    urgent: true,
    logline:
      'A washed-up detective gets a final shot at redemption when a mysterious client asks him to investigate a case that hits too close to home.',
    matchBreakdown: [
      { reason: 'Genre Alignment (Thriller)', value: 50 },
      { reason: 'Budget Range Match', value: 20 },
      { reason: 'Urgent Funding Need', value: 9 },
    ],
    details: {
      synopsis:
        "Private investigator Jack Rourke, haunted by a past failure, is pulled back into the grimy underworld of Neo-Veridia when a femme fatale offers him a seemingly simple case. As he delves deeper, he uncovers a web of corruption that leads all the way to the city's elite, forcing him to confront his own demons to find the truth.",
      budgetBreakdown: [
        { item: 'Cast', amount: 250000, percentage: 31.25 },
        { item: 'Crew', amount: 200000, percentage: 25 },
        { item: 'Locations & Set Design', amount: 150000, percentage: 18.75 },
        { item: 'Post-Production', amount: 125000, percentage: 15.625 },
        { item: 'Marketing', amount: 50000, percentage: 6.25 },
        { item: 'Contingency', amount: 25000, percentage: 3.125 },
      ],
      keyTalent: [
        { name: 'Joe Bell', role: 'Director', link: '#' },
        { name: 'Lilly Karpman', role: 'Producer', link: '#' },
      ],
      brandPlacement: ['Classic Cars', 'Whiskey Brands', 'Vintage Clothing'],
      distribution: ['Independent Film Festivals', 'VOD Platforms'],
    },
  },
]
