import { LogOut } from 'lucide-react'

const LogoutButton = ({ onClick, className = '', iconOnly = false }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-900 text-red-400 font-semibold transition-colors w-full ${className}`}
    aria-label="Logout"
  >
    <LogOut size={22} />
    {!iconOnly && <span>Logout</span>}
  </button>
)

export default LogoutButton
