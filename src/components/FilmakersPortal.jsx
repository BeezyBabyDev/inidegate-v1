import CreativePortal from './CreativePortal'
import { useNavigate } from 'react-router-dom'

const FilmakersPortal = props => {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/')
  }
  return <CreativePortal {...props} onLogout={handleLogout} />
}

export default FilmakersPortal
