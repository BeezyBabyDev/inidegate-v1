import CreativePortal from './CreativePortal'
import { useNavigate } from 'react-router-dom'

const FilmakersPortal = props => {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/')
  }
  return (
    <div>
      <button
        className="mb-4 px-4 py-2 bg-slate-700 text-white rounded hover:bg-purple-700"
        onClick={() => navigate('/')}
      >
        Back to Portals
      </button>
      <CreativePortal {...props} onLogout={handleLogout} />
    </div>
  )
}

export default FilmakersPortal
