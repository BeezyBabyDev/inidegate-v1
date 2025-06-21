import { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import InvestorDashboard from './dashboard/InvestorDashboard';
import InvestorProfileEditor from './InvestorProfileEditor';
import CommunityForum from './CommunityForum';
import SmartMatching from './SmartMatching';
import { useScrollToTop } from '../hooks/useScrollToTop';
import Button from './Button';

const InvestorPortal = ({ onLogout }) => {
  useScrollToTop();

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [profileView, setProfileView] = useState('showcase');
  const [profileData, setProfileData] = useState({
    name: 'Jourdain Bell',
    primaryRole: 'Executive Producer',
    secondaryRole: 'Angel Investor',
    additionalRoles: ['Family Office', 'Strategic Partner'],
    location: 'Los Angeles, CA',
    memberSince: 'January 2023',
    bio: 'Experienced film industry executive and entrepreneur with deep expertise in independent film financing and distribution. Co-founder of IndieGate.io, passionate about empowering emerging filmmakers through strategic investment and mentorship.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    company: 'Bell Entertainment Ventures',
    title: 'Managing Partner & Co-Founder',
    email: 'jourdain@indiegate.io',
    phone: '(310) 555-0123',
    website: 'www.bellentertainment.com',
    linkedin: 'linkedin.com/in/jourdainbell',
    investmentRange: '$250K - $3M',
    totalInvestments: '$12.8M',
    projectsFinanced: 24,
    averageROI: '315%',
    preferredGenres: ['Drama', 'Thriller', 'Documentary', 'Comedy'],
    investmentStage: ['Development', 'Pre-Production', 'Production'],
    budgetRange: { min: '100K', max: '3M' },
    verified: true,
  });

  const handleProfileSave = (updatedProfile) => {
    setProfileData(updatedProfile);
    setProfileView('showcase');
  };

  const handleProfileCancel = () => {
    setProfileView('showcase');
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  const renderProfileShowcase = () => (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">My Investor Profile</h2>
        <Button
          onClick={() => setProfileView('editor')}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          Edit Profile
        </Button>
      </div>
      <div className="flex items-start space-x-6">
        <div className="relative">
          <img src={profileData.avatar} alt={profileData.name} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg" />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-white">{profileData.name}</h1>
          </div>
          <p className="text-lg text-green-400 font-medium">{profileData.primaryRole}</p>
          <p className="text-purple-200">{profileData.company}</p>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <InvestorDashboard onSelectDeal={() => {}} />;
      case 'Profile':
        if (profileView === 'editor') {
          return <InvestorProfileEditor initialData={profileData} onSave={handleProfileSave} onCancel={handleProfileCancel} />;
        }
        return <div className="space-y-6">{renderProfileShowcase()}</div>;
      case 'Portfolio': return <div>Portfolio Content</div>;
      case 'Deal Flow': return <div>Deal Flow Content</div>;
      case 'Community': return <CommunityForum />;
      case 'Smart Matching': return <SmartMatching />;
      case 'Analytics': return <div>Analytics Content</div>;
      case 'Messages': return <div>Messages Content</div>;
      default:
        return <InvestorDashboard onSelectDeal={() => {}} />;
    }
  };

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <div className="fixed top-0 left-0 h-full z-30">
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          activeTab={activeTab}
          onTabClick={handleTabClick}
          onLogout={onLogout}
        />
      </div>
      <div className={`flex-1 flex flex-col h-screen transition-all duration-300 ${isSidebarCollapsed ? 'pl-20' : 'pl-64'}`}>
        <TopBar activePill={activeTab} onPillClick={handleTabClick} />
        <main className="flex-1 overflow-y-auto p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default InvestorPortal;
