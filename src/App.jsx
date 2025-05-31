import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import CreativePortal from './components/CreativePortal';
import InvestorPortal from './components/InvestorPortal';

function App() {
  const [currentView, setCurrentView] = useState('landing');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const portal = urlParams.get('portal');
    
    if (portal === 'talent') {
      setCurrentView('talent');
    } else if (portal === 'investor') {
      setCurrentView('investor');
    }
  }, []);

  const handleLogout = () => {
    window.history.pushState({}, '', '/');
    setCurrentView('landing');
  };

  const handleSelectPortal = (portal) => {
    window.history.pushState({}, '', `/?portal=${portal}`);
    setCurrentView(portal);
  };

  if (currentView === 'landing') {
    return <LandingPage onSelectPortal={handleSelectPortal} />;
  }

  if (currentView === 'talent') {
    return <CreativePortal onLogout={handleLogout} />;
  }

  if (currentView === 'investor') {
    return <InvestorPortal onLogout={handleLogout} />;
  }

  return <LandingPage onSelectPortal={handleSelectPortal} />;
}

export default App;
