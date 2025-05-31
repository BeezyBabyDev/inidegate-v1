import { useState } from 'react';
import Button from './Button';
import Card from './Card';

const TalentProfile = ({ talent = {}, onEdit, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample talent data - will be dynamic based on role
  const defaultTalent = {
    name: "Sarah Chen",
    role: "Actor", // Actor, Director of Photography, Director, Sound Engineer, etc.
    location: "Los Angeles, CA",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=200&h=200&fit=crop&crop=face",
    bio: "Versatile actor with 8+ years experience in independent film, television, and theater. Specializing in dramatic roles with a strong background in method acting.",
    
    // Actor-specific fields
    actorAccess: "sarahchen_actor",
    castingNetworks: "sarah.chen.actor",
    imdb: "nm1234567",
    demoReel: "https://vimeo.com/123456789",
    headshots: [
      "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=500&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face"
    ],
    specialSkills: ["American Accent", "British Accent", "Stage Combat", "Piano", "Spanish (Fluent)", "Horseback Riding"],
    
    // Common fields for all roles
    credits: [
      { title: "Indie Dreams", role: "Lead", type: "Feature Film", year: "2024", director: "Mike Johnson" },
      { title: "City Lights", role: "Supporting", type: "TV Series", year: "2023", director: "Anna Smith" },
      { title: "The Last Call", role: "Lead", type: "Short Film", year: "2023", director: "David Wilson" }
    ],
    
    portfolio: [
      { title: "Character Study Reel", url: "https://vimeo.com/123456", thumbnail: "https://images.unsplash.com/photo-1��📹&w=300&h=200&fit=crop" },
      { title: "Commercial Work", url: "https://vimeo.com/789012", thumbnail: "https://images.unsplash.com/photo-1��🎬&w=300&h=200&fit=crop" }
    ],
    
    awards: [
      { title: "Best Actress", festival: "LA Independent Film Festival", year: "2023" },
      { title: "Outstanding Performance", festival: "Sundance Film Festival", year: "2022" }
    ],
    
    availability: "Available",
    rates: "$500-800/day",
    unions: ["SAG-AFTRA"],
    
    // Contact & Social
    email: "sarah@sarahchenactor.com",
    website: "www.sarahchenactor.com",
    instagram: "@sarahchenactor",
    
    // Verification status
    verified: true,
    profileCompletion: 92
  };

  const talentData = { ...defaultTalent, ...talent };

  const ProfileHeader = () => (
    <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-t-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative">
          <img 
            src={talentData.avatar} 
            alt={talentData.name}
            className="w-24 h-24 rounded-full border-4 border-white/20 object-cover"
          />
          {talentData.verified && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{talentData.name}</h1>
          <p className="text-xl text-purple-100 mb-2">{talentData.role}</p>
          <p className="text-purple-200 mb-4">{talentData.location}</p>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm ${
              talentData.availability === 'Available' ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'
            }`}>
              {talentData.availability}
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-100 rounded-full text-sm">
              {talentData.rates}
            </span>
            {talentData.unions.map((union, index) => (
              <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-100 rounded-full text-sm">
                {union}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3">
            <Button onClick={onEdit} className="bg-white text-purple-700 hover:bg-gray-100">
              Edit Profile
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
              Contact
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
              Share Profile
            </Button>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-2xl font-bold">{talentData.profileCompletion}%</div>
          <div className="text-sm text-purple-200">Profile Complete</div>
          <div className="w-20 h-2 bg-purple-700 rounded-full mt-2">
            <div 
              className="h-full bg-white rounded-full" 
              style={{ width: `${talentData.profileCompletion}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Bio */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">About</h3>
        <p className="text-gray-700 leading-relaxed">{talentData.bio}</p>
      </Card>

      {/* Industry Links */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Industry Profiles</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {talentData.actorAccess && (
            <a href={`https://actorsaccess.com/${talentData.actorAccess}`} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">AA</span>
              </div>
              <span className="text-sm font-medium">Actors Access</span>
            </a>
          )}
          
          {talentData.castingNetworks && (
            <a href={`https://castingnetworks.com/${talentData.castingNetworks}`} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">CN</span>
              </div>
              <span className="text-sm font-medium">Casting Networks</span>
            </a>
          )}
          
          {talentData.imdb && (
            <a href={`https://imdb.com/name/${talentData.imdb}`} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">IMDb</span>
              </div>
              <span className="text-sm font-medium">IMDb Page</span>
            </a>
          )}
          
          {talentData.website && (
            <a href={talentData.website} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118C6.004 6.177 4.842 7.504 4.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118C13.996 6.177 15.158 7.504 15.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946c-.759 1.496-1.921 2.823-2.783 4.118zm-6.268 0C6.004 13.823 4.842 12.496 4.083 11h1.946c.089 1.546.383 2.97.837 4.118z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium">Website</span>
            </a>
          )}
        </div>
      </Card>

      {/* Special Skills (for Actors) */}
      {talentData.specialSkills && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Special Skills</h3>
          <div className="flex flex-wrap gap-2">
            {talentData.specialSkills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </Card>
      )}

      {/* Awards */}
      {talentData.awards && talentData.awards.length > 0 && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Awards & Recognition</h3>
          <div className="space-y-3">
            {talentData.awards.map((award, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">{award.title}</div>
                  <div className="text-sm text-gray-600">{award.festival} - {award.year}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );

  const PortfolioTab = () => (
    <div className="space-y-6">
      {/* Demo Reel */}
      {talentData.demoReel && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Demo Reel</h3>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              <p className="text-gray-600">Demo Reel</p>
              <Button size="sm" className="mt-2">Watch Reel</Button>
            </div>
          </div>
        </Card>
      )}

      {/* Headshots (for Actors) */}
      {talentData.headshots && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Headshots</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {talentData.headshots.map((headshot, index) => (
              <div key={index} className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
                <img src={headshot} alt={`Headshot ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Portfolio Items */}
      {talentData.portfolio && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {talentData.portfolio.map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                </div>
                <div className="p-4">
                  <h4 className="font-medium">{item.title}</h4>
                  <Button size="sm" className="mt-2">View</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );

  const CreditsTab = () => (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-6">Film & TV Credits</h3>
      <div className="space-y-4">
        {talentData.credits.map((credit, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-semibold text-lg">{credit.title}</h4>
                <p className="text-purple-600 font-medium">{credit.role}</p>
                <p className="text-gray-600">{credit.type} • Directed by {credit.director}</p>
              </div>
              <span className="text-gray-500 font-medium">{credit.year}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="p-4">
        <Button variant="outline" onClick={onBack} className="mb-4">
          ← Back to Talent Network
        </Button>
      </div>

      {/* Profile Container */}
      <div className="max-w-4xl mx-auto pb-8">
        <Card className="mb-6 overflow-hidden">
          <ProfileHeader />
          
          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'portfolio', label: 'Portfolio & Reel' },
                { key: 'credits', label: 'Credits' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.key
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </Card>

        {/* Tab Content */}
        <div className="px-6">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'portfolio' && <PortfolioTab />}
          {activeTab === 'credits' && <CreditsTab />}
        </div>
      </div>
    </div>
  );
};

export default TalentProfile; 