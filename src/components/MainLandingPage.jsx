import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import PortalCard from './PortalCard'

const portals = [
  {
    name: 'For Filmmakers',
    desc: 'Access funding opportunities, project management tools, and industry connections to bring your vision to life.',
    key: 'filmmakers',
    url: '/portal/filmmakers',
  },
  {
    name: 'For Investors',
    desc: 'Discover promising independent film projects and connect with talented creators for strategic investments.',
    key: 'investors',
    url: '/portal/investors',
  },
  {
    name: 'For Brands',
    desc: 'Partner with independent filmmakers for authentic storytelling and targeted audience engagement.',
    key: 'brands',
    url: '/portal/brands',
  },
  {
    name: 'For Talent',
    desc: 'Connect with indie film projects, showcase your skills, and build meaningful relationships in the industry.',
    key: 'talent',
    url: '/portal/talent',
  },
  {
    name: 'For Distributors',
    desc: 'Discover unique independent content and expand your distribution network with quality films.',
    key: 'distributors',
    url: '/portal/distributors',
    disabled: true,
  },
]

const useCases = [
  {
    title: 'For Filmmakers',
    desc: 'Access funding, manage projects, and connect with industry professionals to bring your vision to life.',
  },
  {
    title: 'For Investors',
    desc: 'Discover vetted indie projects, analyze opportunities, and invest with confidence in the next big hit.',
  },
  {
    title: 'For Brands',
    desc: 'Partner with creative projects for authentic marketing and product placement opportunities.',
  },
  {
    title: 'For Talent & Influencers',
    desc: 'Find roles, collaborations, and build your creative portfolio in the indie film space.',
  },
  {
    title: 'For Distributors',
    desc: 'Expand your catalog and reach new audiences with curated indie content. (Coming Soon)',
  },
]

const MainLandingPage = () => {
  const navigate = useNavigate()
  const handlePortalClick = url => {
    if (url) navigate(url)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950 text-white">
      {/* Header */}
      <header className="px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-extrabold tracking-tight">IndieGate.io</div>
        <div className="flex gap-4">
          <Button
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => (window.location.href = '/demo')}
          >
            Schedule a Demo
          </Button>
          <Button
            className="bg-slate-800 hover:bg-slate-700"
            onClick={() => (window.location.href = '/register')}
          >
            Create Account
          </Button>
          <Button
            className="bg-slate-700 hover:bg-purple-700"
            onClick={() => (window.location.href = '/login')}
          >
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
          Empowering <span className="text-purple-400">Independent Filmmakers</span>
          <br />
          with Tools, Funding, and Industry Connections
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8">
          IndieGate.io is the all-in-one platform designed to help indie creators thrive. Discover
          funding, manage projects, connect with brands, talent, and distributors—all in one trusted
          ecosystem.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <Button
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 text-lg font-semibold"
            onClick={() => (window.location.href = '/register')}
          >
            Get Started
          </Button>
          <Button
            className="bg-slate-800 hover:bg-slate-700 px-8 py-3 text-lg font-semibold"
            onClick={() => (window.location.href = '/demo')}
          >
            Schedule a Demo
          </Button>
        </div>
      </section>

      {/* Platform Overview - Explore Our Portals Section Centered Grid Fix */}
      <section className="portals-section mt-20">
        <h2 className="section-title">Explore Portals</h2>
        <div className="portals-grid">
          {portals.map(portal => (
            <PortalCard key={portal.key} portal={portal} onPortalClick={handlePortalClick} />
          ))}
          {/* Add an empty cell for symmetry if only 5 portals */}
          <div style={{ visibility: 'hidden' }}></div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Who Is IndieGate.io For?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map(use => (
            <div key={use.title} className="bg-slate-800/80 rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-semibold mb-2 text-purple-300">{use.title}</h4>
              <p className="text-slate-200">{use.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About IndieGate.io</h2>
        <p className="text-lg text-slate-200 mb-6">
          IndieGate.io was founded by filmmakers for filmmakers. Our mission is to break down
          barriers in the entertainment industry, providing independent creators with the tools,
          funding, and connections they need to succeed. We believe in the power of storytelling and
          are committed to supporting the next generation of creative voices.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <Button
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 text-lg font-semibold"
            onClick={() => (window.location.href = '/register')}
          >
            Join the Movement
          </Button>
          <Button
            className="bg-slate-800 hover:bg-slate-700 px-8 py-3 text-lg font-semibold"
            onClick={() => (window.location.href = '/demo')}
          >
            Book a Demo
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} IndieGate.io &mdash; Empowering Independent Filmmakers
      </footer>
    </div>
  )
}

export default MainLandingPage
