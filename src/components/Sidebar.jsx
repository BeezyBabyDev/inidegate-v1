import React from 'react';
import { LogOut, User, Briefcase, DollarSign, Users, MessageSquare, Search, Settings, BarChart2, Home, ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = ({ isCollapsed, onToggle, activeTab, onTabClick, onLogout }) => {
  const navItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: User, label: 'Profile' },
    { icon: Briefcase, label: 'Portfolio' },
    { icon: DollarSign, label: 'Deal Flow' },
    { icon: Users, label: 'Community' },
    { icon: Search, label: 'Smart Matching' },
    { icon: BarChart2, label: 'Analytics' },
    { icon: MessageSquare, label: 'Messages' },
  ];

  return (
    <div className={`transition-all duration-300 ease-in-out bg-gray-900/50 backdrop-blur-lg text-white flex flex-col h-screen p-4 border-r border-white/10 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex items-center justify-between mb-8">
        {!isCollapsed && <h1 className="text-xl font-bold text-white">IndieGate.io</h1>}
        <button onClick={onToggle} className="p-2 rounded-full hover:bg-white/10">
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="flex-grow">
        <ul>
          {navItems.map(({ icon: Icon, label }) => (
            <li key={label} className="mb-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onTabClick(label);
                }}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  activeTab === label
                    ? 'bg-purple-600/50 text-white'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                <Icon size={20} />
                {!isCollapsed && <span className="ml-4 font-semibold">{label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <button
          onClick={onLogout}
          className="flex items-center w-full p-3 rounded-lg text-gray-300 hover:bg-red-500/20 hover:text-red-300 transition-colors"
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="ml-4 font-semibold">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 