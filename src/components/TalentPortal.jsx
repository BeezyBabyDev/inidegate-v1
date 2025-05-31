import { useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Button from './Button';
import TalentProfile from './TalentProfile';
import TalentProfileEditor from './TalentProfileEditor';

const TalentPortal = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('opportunities');
  const [profileView, setProfileView] = useState('showcase'); // 'showcase' or 'editor'

  // Sample profile data - in real app this would come from API
  const [profileData, setProfileData] = useState({
    name: 'Alex Rivera',
    role: 'Actor',
    location: 'Los Angeles, CA',
    bio: 'Versatile actor with 8+ years of experience in film and television. Known for dramatic roles and character work.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    email: 'alex.rivera@email.com',
    phone: '(555) 123-4567',
    website: 'www.alexrivera.com',
    instagram: '@alexriveraactor',
    actorAccess: 'alex.rivera',
    castingNetworks: 'alexrivera',
    imdb: 'nm1234567',
    availability: 'Available',
    rates: '$1,500-2,500/day',
    unions: ['SAG-AFTRA'],
    specialSkills: ['Spanish (Fluent)', 'Stage Combat', 'Horseback Riding', 'Guitar', 'New York Accent'],
    demoReel: 'https://vimeo.com/alex-rivera-reel',
    headshots: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face'
    ],
    credits: [
      { id: 1, title: 'The Last Stand', role: 'Detective Martinez', type: 'Feature Film', year: '2023', director: 'Sarah Chen' },
      { id: 2, title: 'City Streets', role: 'Marco', type: 'TV Series', year: '2022', director: 'Mike Johnson' },
      { id: 3, title: 'Broken Dreams', role: 'Lead', type: 'Short Film', year: '2021', director: 'Lisa Park' }
    ],
    awards: ['Best Actor - LA Indie Film Festival 2022'],
    verified: true
  });

  const projectOpportunities = [
    { id: 1, title: 'Leading Man - Indie Drama', company: 'Moonlight Productions', type: 'Feature Film', salary: '$15K + Backend', location: 'Atlanta, GA', skills: ['Drama', 'Spanish', 'Age 25-35'], posted: '2 days ago' },
    { id: 2, title: 'Supporting Role - Netflix Series', company: 'StreamVision Studios', type: 'TV Series', salary: '$5K/episode', location: 'Los Angeles, CA', skills: ['Comedy', 'Improv', 'Series Regular'], posted: '1 week ago' },
    { id: 3, title: 'Stunt Double - Action Film', company: 'ActionFlix Pictures', type: 'Feature Film', salary: '$800-1200/day', location: 'Vancouver, BC', skills: ['Stunt Work', 'Martial Arts', 'Driving'], posted: '3 days ago' },
    { id: 4, title: 'Voice Over - Animation', company: 'ToonTime Animation', type: 'Voice Work', salary: '$500-800/session', location: 'Remote', skills: ['Voice Acting', 'Character Voices', 'Animation'], posted: '5 days ago' },
  ];

  const myApplications = [
    { id: 1, title: 'Lead Role - Thriller', company: 'Dark Cinema Films', status: 'Callback Scheduled', applied: '1 week ago', stage: 'Final Audition' },
    { id: 2, title: 'Guest Star - Crime Drama', company: 'Network Television', status: 'Under Review', applied: '3 days ago', stage: 'Initial Audition' },
    { id: 3, title: 'Supporting Role - Romance', company: 'Heartstring Pictures', status: 'Booked', applied: '2 weeks ago', stage: 'Contract Negotiation' },
  ];

  const skillAssessments = [
    { skill: 'Dramatic Acting', level: 'Expert', score: 95, color: 'green' },
    { skill: 'Comedy', level: 'Advanced', score: 88, color: 'blue' },
    { skill: 'Voice Acting', level: 'Intermediate', score: 72, color: 'yellow' },
    { skill: 'Stage Combat', level: 'Advanced', score: 85, color: 'blue' },
  ];

  const handleProfileSave = (updatedProfile) => {
    setProfileData(updatedProfile);
    setProfileView('showcase');
  };

  const handleProfileCancel = () => {
    setProfileView('showcase');
  };

  // Profile tab rendering
  const renderProfileTab = () => {
    if (profileView === 'editor') {
      return (
        <TalentProfileEditor
          initialData={profileData}
          onSave={handleProfileSave}
          onCancel={handleProfileCancel}
        />
      );
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">My Profile</h2>
          <Button onClick={() => setProfileView('editor')}>
            Edit Profile
          </Button>
        </div>
        <TalentProfile profileData={profileData} />
      </div>
    );
  };

  const renderOpportunitiesTab = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">New Opportunities</p>
              <p className="text-2xl font-bold text-gray-900">47</p>
            </div>
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0v10a2 2 0 002 2h4a2 2 0 002-2V6m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h2V6z" />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Applications</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Interviews</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Profile Views</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </Card>
      </div>

      {/* Project Opportunities */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recommended Opportunities</h3>
          <Button size="sm">View All</Button>
        </div>
        <div className="space-y-4">
          {projectOpportunities.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                  <p className="text-gray-600">{project.company}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{project.salary}</p>
                  <p className="text-sm text-gray-500">{project.posted}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0v10a2 2 0 002 2h4a2 2 0 002-2V6m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h2V6z" />
                  </svg>
                  {project.type}
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Required Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="sm">Apply Now</Button>
                <Button size="sm" variant="outline">Save for Later</Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderApplicationsTab = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">My Applications</h3>
          <Button size="sm">Application History</Button>
        </div>
        <div className="space-y-4">
          {myApplications.map((application) => (
            <div key={application.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{application.title}</h4>
                  <p className="text-gray-600">{application.company}</p>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                    application.status === 'Booked' ? 'bg-green-100 text-green-800' :
                    application.status === 'Callback Scheduled' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {application.status}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">Applied {application.applied}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Current Stage: <span className="font-medium">{application.stage}</span></p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">View Details</Button>
                  {application.status === 'Callback Scheduled' && (
                    <Button size="sm">Prepare Audition</Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderSkillsTab = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Skill Assessment</h3>
          <Button size="sm">Take New Assessment</Button>
        </div>
        <div className="space-y-6">
          {skillAssessments.map((skill, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-900">{skill.skill}</span>
                  <span className="text-sm text-gray-600">{skill.level} ({skill.score}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      skill.color === 'green' ? 'bg-green-500' :
                      skill.color === 'blue' ? 'bg-blue-500' :
                      skill.color === 'yellow' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${skill.score}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Training</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Advanced Scene Study</h4>
            <p className="text-sm text-gray-600 mb-3">Deepen your dramatic acting technique</p>
            <Button size="sm" variant="outline">Enroll Now</Button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">On-Camera Technique</h4>
            <p className="text-sm text-gray-600 mb-3">Master film and TV acting skills</p>
            <Button size="sm" variant="outline">Enroll Now</Button>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        title="Talent Network"
        onLogout={onLogout}
        user={{ name: "Alex Rivera", role: "Actor" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Talent Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600">
            Discover film opportunities, track auditions, and build your career.
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('opportunities')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'opportunities'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Opportunities
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'applications'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Applications
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'skills'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'profile'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Profile
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'opportunities' && renderOpportunitiesTab()}
        {activeTab === 'applications' && renderApplicationsTab()}
        {activeTab === 'skills' && renderSkillsTab()}
        {activeTab === 'profile' && renderProfileTab()}
      </div>
    </div>
  );
};

export default TalentPortal; 