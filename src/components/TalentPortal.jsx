import { useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Button from './Button';

const TalentPortal = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('opportunities');

  const projectOpportunities = [
    { id: 1, title: 'Senior React Developer', company: 'TechFlow AI', type: 'Full-time', salary: '$120K - $150K', location: 'Remote', skills: ['React', 'TypeScript', 'Node.js'], posted: '2 days ago' },
    { id: 2, title: 'Full Stack Engineer', company: 'GreenEnergy Labs', type: 'Contract', salary: '$80-100/hr', location: 'San Francisco', skills: ['Python', 'Django', 'AWS'], posted: '1 week ago' },
    { id: 3, title: 'DevOps Engineer', company: 'CloudSync', type: 'Full-time', salary: '$130K - $160K', location: 'New York', skills: ['Docker', 'Kubernetes', 'CI/CD'], posted: '3 days ago' },
    { id: 4, title: 'Mobile App Developer', company: 'HealthTech Plus', type: 'Part-time', salary: '$60-80/hr', location: 'Remote', skills: ['React Native', 'iOS', 'Android'], posted: '5 days ago' },
  ];

  const myApplications = [
    { id: 1, title: 'Frontend Developer', company: 'DataViz Pro', status: 'Interview Scheduled', applied: '1 week ago', stage: 'Technical Interview' },
    { id: 2, title: 'React Developer', company: 'AI Assistant', status: 'Under Review', applied: '3 days ago', stage: 'Initial Review' },
    { id: 3, title: 'Software Engineer', company: 'FinScope Analytics', status: 'Accepted', applied: '2 weeks ago', stage: 'Offer Received' },
  ];

  const skillAssessments = [
    { skill: 'JavaScript', level: 'Expert', score: 95, color: 'green' },
    { skill: 'React', level: 'Advanced', score: 88, color: 'blue' },
    { skill: 'Node.js', level: 'Intermediate', score: 72, color: 'yellow' },
    { skill: 'Python', level: 'Beginner', score: 45, color: 'red' },
  ];

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
                    application.status === 'Accepted' ? 'bg-green-100 text-green-800' :
                    application.status === 'Interview Scheduled' ? 'bg-blue-100 text-blue-800' :
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
                  {application.status === 'Interview Scheduled' && (
                    <Button size="sm">Prepare Interview</Button>
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
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Learning</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Advanced Python Programming</h4>
            <p className="text-sm text-gray-600 mb-3">Boost your Python skills to expert level</p>
            <Button size="sm" variant="outline">Start Learning</Button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">System Design Fundamentals</h4>
            <p className="text-sm text-gray-600 mb-3">Learn to design scalable systems</p>
            <Button size="sm" variant="outline">Start Learning</Button>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        title="Talent Portal"
        onLogout={onLogout}
        user={{ name: "Sarah Chen", role: "Developer" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Talent Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600">
            Discover opportunities, track applications, and grow your career.
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
        {activeTab === 'profile' && (
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Management</h3>
            <p className="text-gray-600">Build and customize your professional profile...</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TalentPortal; 