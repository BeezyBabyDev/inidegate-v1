import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import PortalsCarousel from './PortalsCarousel'

const portals = [
  {
    name: 'Investor Portal',
    desc: 'Investment opportunities and funding connections for film backers.',
    color: 'from-green-500 to-green-700',
    cta: 'Explore Investments',
    key: 'investor',
  },
  {
    name: 'Filmmaker Portal',
    desc: 'Creative tools, project management, and industry resources for indie filmmakers.',
    color: 'from-purple-600 to-purple-800',
    cta: 'For Filmmakers',
    key: 'filmmaker',
  },
  {
    name: 'Brands Portal',
    desc: 'Marketing partnerships and collaboration opportunities for brands.',
    color: 'from-blue-500 to-blue-700',
    cta: 'Brand Partnerships',
    key: 'brands',
  },
  {
    name: 'Talent/Influencers Portal',
    desc: 'Networking and project participation for talent and influencers.',
    color: 'from-pink-500 to-pink-700',
    cta: 'Talent & Influencers',
    key: 'talent',
  },
  {
    name: 'Distributors Platform',
    desc: 'Distribution channels and reach optimization. (Coming Soon)',
    color: 'from-yellow-500 to-yellow-700',
    cta: 'Coming Soon',
    key: 'distributors',
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

      {/* Platform Overview */}
      <section
        className="py-12 px-4 max-w-6xl mx-auto"
        style={{
          minHeight: 600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Portals</h2>
        <PortalsCarousel
          portals={portals}
          onPortalClick={key => {
            const portal = portals.find(p => p.key === key)
            if (portal && !portal.disabled) {
              navigate(`/portal/${portal.key}`)
            }
          }}
        />
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
