import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles/portal-buttons.css'
import App from './App.jsx'
import MainLandingPage from './components/MainLandingPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
