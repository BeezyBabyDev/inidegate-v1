import { useState } from 'react'
import Button from './Button'
import Card from './Card'

const ProjectDetails = ({ projectId, onBack, onShowProfile }) => {
  const [activeTab, setActiveTab] = useState('overview')

  // Comprehensive project data
  const projectData = {
    'midnight-brooklyn': {
      title: 'Midnight in Brooklyn',
      genre: 'Drama',
      budget: '$2.8M',
      seeking: '$1.2M',
      equity: '15%',
      stage: 'Pre-Production',
      status: 'Hot Deal',
      logline:
        'A young immigrant nurse navigates love, loss, and identity while working the night shift in a Brooklyn hospital during the height of the pandemic.',
      synopsis:
        "Set against the backdrop of 2020 Brooklyn, &ldquo;Midnight in Brooklyn&rdquo; follows Amara, a 26-year-old Nigerian nurse who moved to New York to pursue the American dream. Working grueling night shifts at a understaffed hospital during COVID-19, she forms an unlikely bond with Miguel, a Spanish janitor grieving his wife's death. As they navigate personal tragedies and systemic challenges, their friendship becomes a beacon of hope in the darkest of times. The film explores themes of immigration, healthcare inequality, and human resilience through intimate character moments and authentic Brooklyn locations.",
      treatment:
        "Director Sarah Chen brings a cinéma vérité approach to this deeply personal story, utilizing handheld cameras and natural lighting to create an immersive, documentary-like feel. The film will be shot entirely on location in Brooklyn using local hospitals, apartments, and neighborhoods to maintain authenticity. Chen's vision emphasizes the humanity within healthcare settings, contrasting the sterile hospital environment with warm, lived-in personal spaces.",
      keyPersonnel: {
        executiveProducers: [
          {
            name: 'Sarah Montgomery',
            id: 'sarah-montgomery',
            avatar:
              'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=100&h=100&fit=crop&crop=face',
            credentials: 'Documentary specialist, 23 films financed, $47.2M total investment',
          },
          {
            name: 'David Park',
            id: 'david-park',
            avatar:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
            credentials: 'Large-scale financing expert, $847M combined box office',
          },
        ],
        producers: [
          {
            name: 'Sarah Chen',
            id: 'sarah-chen',
            avatar:
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
            credentials: 'Director/Producer, Sundance Award Winner, 3 feature films',
          },
        ],
      },
      talent: [
        {
          name: 'Alex Rivera',
          id: 'alex-rivera',
          avatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
          role: 'Lead Actor',
          credentials: 'Sundance Best Actor, 15 collaborative projects',
        },
      ],
      brands: [
        {
          name: 'Brooklyn Health Network',
          logo: '🏥',
          partnership: 'Location & Technical Advisory',
          value: '$200K in-kind contribution',
        },
      ],
      mediaAssets: {
        sizzleReel: 'https://player.vimeo.com/video/123456789',
        conceptArt: [
          'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop',
        ],
      },
      financialBreakdown: {
        aboveTheLine: {
          talent: '$420K',
          producerFees: '$180K',
          directorFee: '$150K',
        },
        belowTheLine: {
          cinematography: '$240K',
          production: '$680K',
          equipment: '$320K',
        },
        postProduction: {
          editing: '$120K',
          sound: '$90K',
          colorGrading: '$60K',
          music: '$80K',
        },
        marketing: {
          distribution: '$300K',
          publicity: '$150K',
          festivals: '$80K',
        },
      },
      investmentStructure: {
        equityAvailable: '15%',
        minimumInvestment: '$100K',
        tiers: [
          {
            amount: '$100K - $250K',
            equity: '2-5%',
            perks: 'Associate Producer credit, premiere tickets',
          },
          {
            amount: '$250K - $500K',
            equity: '5-10%',
            perks: 'Producer credit, set visits, festival passes',
          },
          {
            amount: '$500K+',
            equity: '10-15%',
            perks: 'Executive Producer credit, profit participation',
          },
        ],
      },
      timeline: {
        development: { start: 'Jan 2024', end: 'Mar 2024', status: 'Completed' },
        preProduction: { start: 'Apr 2024', end: 'Jun 2024', status: 'Current' },
        production: { start: 'Jul 2024', end: 'Sep 2024', status: 'Upcoming' },
        postProduction: { start: 'Oct 2024', end: 'Feb 2025', status: 'Planned' },
      },
      distributionStrategy: {
        domestic: 'Festival circuit (Sundance, Toronto) → Limited theatrical → Streaming',
        international: 'International sales agent, focus on European markets',
        platforms: ['Theatrical', 'VOD', 'SVOD'],
        franchise: 'Limited series potential for streaming platforms',
      },
      marketingPlan: {
        targetAudience: 'Adults 25-54, healthcare workers, immigrant communities',
        budget: '$530K',
        strategy: 'Healthcare advocacy partnerships, festival PR, social impact campaign',
      },
      riskAssessment: {
        production: 'Low - Experienced team, controlled locations',
        market: 'Medium - Dependent on festival acceptance and critical reception',
        financial: 'Low - Conservative budget, completion bond in place',
      },
      taxIncentives: 'New York State 30% tax credit, NYC additional 5%',
      insurance: 'Completion bond secured, E&O insurance included',
      revenueWaterfall: '1. Recoupment 2. Investor Return (15% IRR) 3. Profit Sharing',
      exitStrategy: '18-month projected payback timeline',
    },
    'digital-nomad': {
      title: 'Digital Nomad',
      genre: 'Thriller',
      budget: '$1.5M',
      seeking: '$750K',
      equity: '12%',
      stage: 'Development',
      status: 'Featured',
      logline:
        'A cybersecurity expert working remotely from Bali discovers her company is being used to launder money for international criminals.',
      synopsis:
        "Elena Rodriguez has achieved the digital nomad dream - working as a cybersecurity consultant from a beachside villa in Bali. But when she discovers suspicious financial patterns in her client's system, she uncovers a sophisticated money laundering operation that reaches from Silicon Valley to Southeast Asian criminal networks. As Elena digs deeper, she becomes a target, forcing her to use her technical skills to stay one step ahead of assassins while gathering evidence to expose the conspiracy.",
      treatment:
        'Director Mike Rodriguez brings a modern, tech-savvy approach to the thriller genre, utilizing split screens, coding sequences, and digital interfaces as visual storytelling elements. The film contrasts the paradise of Bali with the dark web of international crime, using vibrant tropical locations against sleek, cold technology settings.',
      // Additional data structure similar to above...
      keyPersonnel: {
        executiveProducers: [
          {
            name: 'Michael Chen',
            id: 'michael-chen',
            avatar:
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
            credentials: 'Tech-forward film investor, $89M combined box office',
          },
        ],
        producers: [
          {
            name: 'Mike Rodriguez',
            id: 'mike-rodriguez',
            avatar:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
            credentials: 'Thriller specialist, 2 previous features, tech industry background',
          },
        ],
      },
      // ... rest of structure similar to midnight-brooklyn
    },
    'last-record-store': {
      title: 'The Last Record Store',
      genre: 'Documentary',
      budget: '$500K',
      seeking: '$300K',
      equity: '20%',
      stage: 'Production',
      status: 'Limited Time',
      logline:
        "The story of vinyl's unexpected comeback through the eyes of independent record store owners fighting to preserve music culture.",
      synopsis:
        'In an era of streaming and digital music, vinyl records have experienced an unprecedented resurgence. &ldquo;The Last Record Store&rdquo; follows three independent record shop owners across America as they navigate the challenges of maintaining physical music spaces in a digital world. From a family-owned shop in Detroit to a punk boutique in Portland, the film explores how these cultural guardians preserve musical heritage while adapting to modern commerce.',
      treatment:
        'Director Alex Kim takes an observational documentary approach, spending months embedded with shop owners to capture the daily rhythms of record store life. The film will feature intimate conversations with customers, musicians, and collectors, creating a love letter to physical media and community gathering spaces.',
      // ... rest of structure similar to above
    },
  }

  const project = projectData[projectId] || projectData['midnight-brooklyn']

  const renderOverviewTab = () => (
    <div className="space-y-8">
      {/* Project Header */}
      <Card className="p-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/30">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{project.title}</h1>
            <div className="flex items-center space-x-4 text-lg">
              <span className="text-purple-300">{project.genre}</span>
              <span className="text-gray-300">•</span>
              <span className="text-blue-300">{project.stage}</span>
            </div>
          </div>
          <span className="px-4 py-2 bg-green-600 text-white rounded-full font-medium">
            {project.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-2xl font-bold text-white">{project.budget}</div>
            <div className="text-sm text-gray-300">Total Budget</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-2xl font-bold text-green-400">{project.seeking}</div>
            <div className="text-sm text-gray-300">Seeking Investment</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-2xl font-bold text-blue-400">{project.equity}</div>
            <div className="text-sm text-gray-300">Equity Available</div>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg">
            <div className="text-2xl font-bold text-purple-400">280%</div>
            <div className="text-sm text-gray-300">Projected ROI</div>
          </div>
        </div>

        <div className="flex space-x-4">
          <Button className="bg-green-600 hover:bg-green-700 text-white">Express Interest</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Schedule Meeting
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Share Project
          </Button>
        </div>
      </Card>

      {/* Logline */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Logline</h3>
        <p className="text-lg text-gray-200 leading-relaxed italic">
          &ldquo;{project.logline}&rdquo;
        </p>
      </Card>

      {/* Synopsis */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Synopsis</h3>
        <p className="text-gray-200 leading-relaxed">{project.synopsis}</p>
      </Card>

      {/* Treatment */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Creative Vision & Treatment</h3>
        <p className="text-gray-200 leading-relaxed">{project.treatment}</p>
      </Card>
    </div>
  )

  const renderPersonnelTab = () => (
    <div className="space-y-8">
      {/* Executive Producers */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Executive Producers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.keyPersonnel?.executiveProducers?.map((person, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-16 h-16 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-blue-400"
                onClick={() => onShowProfile(person.id)}
              />
              <div className="flex-1">
                <h4
                  className="font-semibold text-white cursor-pointer hover:text-blue-400"
                  onClick={() => onShowProfile(person.id)}
                >
                  {person.name}
                </h4>
                <p className="text-sm text-gray-300 mt-1">{person.credentials}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Producers */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Producers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.keyPersonnel?.producers?.map((person, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-16 h-16 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-blue-400"
                onClick={() => onShowProfile(person.id)}
              />
              <div className="flex-1">
                <h4
                  className="font-semibold text-white cursor-pointer hover:text-blue-400"
                  onClick={() => onShowProfile(person.id)}
                >
                  {person.name}
                </h4>
                <p className="text-sm text-gray-300 mt-1">{person.credentials}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Talent & Network */}
      {project.talent && (
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Key Talent</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.talent.map((person, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-16 h-16 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-blue-400"
                  onClick={() => onShowProfile(person.id)}
                />
                <div className="flex-1">
                  <h4
                    className="font-semibold text-white cursor-pointer hover:text-blue-400"
                    onClick={() => onShowProfile(person.id)}
                  >
                    {person.name}
                  </h4>
                  <p className="text-sm text-blue-300">{person.role}</p>
                  <p className="text-sm text-gray-300 mt-1">{person.credentials}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Brand Partners */}
      {project.brands && (
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Brand Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.brands.map((brand, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
                <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center text-2xl">
                  {brand.logo}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">{brand.name}</h4>
                  <p className="text-sm text-blue-300">{brand.partnership}</p>
                  <p className="text-sm text-green-400 mt-1">{brand.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )

  const renderMediaTab = () => (
    <div className="space-y-8">
      {/* Sizzle Reel */}
      {project.mediaAssets?.sizzleReel && (
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Sizzle Reel</h3>
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              src={project.mediaAssets.sizzleReel}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Card>
      )}

      {/* Concept Art */}
      {project.mediaAssets?.conceptArt && (
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Concept Art & Stills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.mediaAssets.conceptArt.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`Concept art ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <Button variant="outline" className="text-white border-white">
                    View Full Size
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )

  const renderFinancialTab = () => (
    <div className="space-y-8">
      {/* Budget Breakdown */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Detailed Budget Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-medium text-green-400 mb-4">Above-the-Line</h4>
            <div className="space-y-3">
              {Object.entries(project.financialBreakdown?.aboveTheLine || {}).map(
                ([category, amount]) => (
                  <div key={category} className="flex justify-between">
                    <span className="text-gray-300 capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}:
                    </span>
                    <span className="text-white font-medium">{amount}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-blue-400 mb-4">Below-the-Line</h4>
            <div className="space-y-3">
              {Object.entries(project.financialBreakdown?.belowTheLine || {}).map(
                ([category, amount]) => (
                  <div key={category} className="flex justify-between">
                    <span className="text-gray-300 capitalize">{category}:</span>
                    <span className="text-white font-medium">{amount}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-purple-400 mb-4">Post-Production</h4>
            <div className="space-y-3">
              {Object.entries(project.financialBreakdown?.postProduction || {}).map(
                ([category, amount]) => (
                  <div key={category} className="flex justify-between">
                    <span className="text-gray-300 capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}:
                    </span>
                    <span className="text-white font-medium">{amount}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-orange-400 mb-4">Marketing & Distribution</h4>
            <div className="space-y-3">
              {Object.entries(project.financialBreakdown?.marketing || {}).map(
                ([category, amount]) => (
                  <div key={category} className="flex justify-between">
                    <span className="text-gray-300 capitalize">{category}:</span>
                    <span className="text-white font-medium">{amount}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Investment Structure */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Investment Structure</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-4 bg-blue-900/30 rounded-lg">
            <div className="text-2xl font-bold text-blue-400">
              {project.investmentStructure?.equityAvailable}
            </div>
            <div className="text-sm text-gray-300">Total Equity Available</div>
          </div>
          <div className="text-center p-4 bg-green-900/30 rounded-lg">
            <div className="text-2xl font-bold text-green-400">
              {project.investmentStructure?.minimumInvestment}
            </div>
            <div className="text-sm text-gray-300">Minimum Investment</div>
          </div>
          <div className="text-center p-4 bg-purple-900/30 rounded-lg">
            <div className="text-2xl font-bold text-purple-400">15-20%</div>
            <div className="text-sm text-gray-300">Target IRR</div>
          </div>
        </div>

        <h4 className="text-lg font-medium text-white mb-4">Investment Tiers</h4>
        <div className="space-y-4">
          {project.investmentStructure?.tiers?.map((tier, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-white">{tier.amount}</span>
                <span className="text-blue-400 font-medium">{tier.equity}</span>
              </div>
              <p className="text-sm text-gray-300">{tier.perks}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const renderTimelineTab = () => (
    <div className="space-y-8">
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Production Timeline</h3>
        <div className="space-y-6">
          {Object.entries(project.timeline || {}).map(([phase, details]) => (
            <div key={phase} className="flex items-center space-x-6">
              <div
                className={`w-4 h-4 rounded-full ${
                  details.status === 'Completed'
                    ? 'bg-green-500'
                    : details.status === 'Current'
                      ? 'bg-blue-500'
                      : details.status === 'Upcoming'
                        ? 'bg-yellow-500'
                        : 'bg-gray-500'
                }`}
              ></div>
              <div className="flex-1">
                <h4 className="font-medium text-white capitalize">
                  {phase.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <p className="text-sm text-gray-300">
                  {details.start} - {details.end}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  details.status === 'Completed'
                    ? 'bg-green-900/30 text-green-400'
                    : details.status === 'Current'
                      ? 'bg-blue-900/30 text-blue-400'
                      : details.status === 'Upcoming'
                        ? 'bg-yellow-900/30 text-yellow-400'
                        : 'bg-gray-900/30 text-gray-400'
                }`}
              >
                {details.status}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const renderDistributionTab = () => (
    <div className="space-y-8">
      {/* Distribution Strategy */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Distribution Strategy</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-blue-400 mb-3">Domestic Strategy</h4>
            <p className="text-gray-200">{project.distributionStrategy?.domestic}</p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-green-400 mb-3">International Strategy</h4>
            <p className="text-gray-200">{project.distributionStrategy?.international}</p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-purple-400 mb-3">Platform Targets</h4>
            <div className="flex flex-wrap gap-2">
              {project.distributionStrategy?.platforms?.map((platform, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Marketing Plan */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Marketing Plan</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-white mb-2">Target Audience</h4>
            <p className="text-gray-200">{project.marketingPlan?.targetAudience}</p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-2">Marketing Budget</h4>
            <p className="text-green-400 font-semibold">{project.marketingPlan?.budget}</p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-2">Strategy</h4>
            <p className="text-gray-200">{project.marketingPlan?.strategy}</p>
          </div>
        </div>
      </Card>
    </div>
  )

  const renderLegalTab = () => (
    <div className="space-y-8">
      {/* Risk Assessment */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Risk Assessment</h3>
        <div className="space-y-4">
          {Object.entries(project.riskAssessment || {}).map(([category, assessment]) => (
            <div
              key={category}
              className="flex justify-between items-center p-3 bg-white/5 rounded-lg"
            >
              <span className="font-medium text-white capitalize">{category} Risk:</span>
              <div className="text-right">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    assessment.includes('Low')
                      ? 'bg-green-900/30 text-green-400'
                      : assessment.includes('Medium')
                        ? 'bg-yellow-900/30 text-yellow-400'
                        : 'bg-red-900/30 text-red-400'
                  }`}
                >
                  {assessment.split(' - ')[0]}
                </span>
                <p className="text-sm text-gray-300 mt-1">{assessment.split(' - ')[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Financial Terms */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Financial Terms & Legal</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-white mb-2">Tax Incentives</h4>
            <p className="text-green-400">{project.taxIncentives}</p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-2">Insurance Coverage</h4>
            <p className="text-gray-200">{project.insurance}</p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-2">Revenue Waterfall</h4>
            <p className="text-gray-200">{project.revenueWaterfall}</p>
          </div>
          <div>
            <h4 className="font-medium text-white mb-2">Exit Strategy</h4>
            <p className="text-gray-200">{project.exitStrategy}</p>
          </div>
        </div>
      </Card>

      {/* Investment Documents */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Investment Documents</h3>
        <div className="space-y-3">
          {[
            'Private Placement Memorandum (PPM)',
            'Subscription Agreement',
            'Operating Agreement',
            'Business Plan',
            'Financial Projections',
          ].map((doc, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 bg-white/5 rounded-lg"
            >
              <span className="text-white">{doc}</span>
              <Button size="sm" variant="outline" className="text-white border-white">
                Download
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📝' },
    { id: 'personnel', label: 'Key Personnel', icon: '👥' },
    { id: 'media', label: 'Media Assets', icon: '🎬' },
    { id: 'financial', label: 'Financials', icon: '💰' },
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'distribution', label: 'Distribution', icon: '📺' },
    { id: 'legal', label: 'Legal & Risk', icon: '⚖️' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Button
            onClick={onBack}
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Deal Flow
          </Button>
          <h1 className="text-3xl font-bold text-white">{project.title}</h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 space-x-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                activeTab === tab.id
                  ? 'bg-white text-purple-900 shadow-lg'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === 'overview' && renderOverviewTab()}
          {activeTab === 'personnel' && renderPersonnelTab()}
          {activeTab === 'media' && renderMediaTab()}
          {activeTab === 'financial' && renderFinancialTab()}
          {activeTab === 'timeline' && renderTimelineTab()}
          {activeTab === 'distribution' && renderDistributionTab()}
          {activeTab === 'legal' && renderLegalTab()}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
