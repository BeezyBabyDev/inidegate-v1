import React from 'react';
import { Search } from 'lucide-react';

const TopBar = ({ activePill, onPillClick }) => {
  const pills = ['🏠 Dashboard', '👤 Profile', '💼 Portfolio', '💰 Deal Flow', '💬 Community', '🤖 Smart Matching', '📊 Analytics'];

  return (
    <div className="p-4 bg-gray-900/30 backdrop-blur-lg border-b border-white/10">
      <div className="relative w-full max-w-lg mx-auto mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="search"
          placeholder="Search projects, people, and more..."
          className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-12 pr-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="flex items-center justify-center space-x-2">
        {pills.map(pill => (
          <button
            key={pill}
            onClick={() => onPillClick(pill)}
            className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${
                activePill === pill
                ? 'bg-white text-gray-900'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {pill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopBar; 