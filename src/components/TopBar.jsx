import { Search } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="p-4 flex items-center justify-center">
      <div className="relative w-full max-w-lg">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="search"
          placeholder="Search projects, people, and more..."
          className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>
  );
};

export default TopBar; 