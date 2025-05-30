import { useState } from 'react';
import LandingPage from './components/LandingPage';
import InvestorPortal from './components/InvestorPortal';
import TalentPortal from './components/TalentPortal';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [userType, setUserType] = useState(null);

  const handlePortalSelection = (portal) => {
    setUserType(portal);
    setCurrentView('portal');
  };

  const handleLogout = () => {
    setUserType(null);
    setCurrentView('landing');
  };

  // Landing Page
  if (currentView === 'landing') {
    return <LandingPage onSelectPortal={handlePortalSelection} />;
  }

  // Portal Views
  if (currentView === 'portal') {
    if (userType === 'investor') {
      return <InvestorPortal onLogout={handleLogout} />;
    }
    if (userType === 'talent') {
      return <TalentPortal onLogout={handleLogout} />;
    }
  }

  // Fallback to landing
  return <LandingPage onSelectPortal={handlePortalSelection} />;
}

export default App;
