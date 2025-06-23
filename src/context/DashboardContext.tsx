import React, { createContext, useState, useContext, ReactNode } from 'react'

// Define the shape of the context's value
interface DashboardContextType {
  expandedSection: string | null
  setExpandedSection: (section: string | null) => void
}

// Create the context with a default value (can be undefined or a mock)
const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

// Custom hook for consuming the context
export const useDashboard = (): DashboardContextType => {
  const context = useContext(DashboardContext)
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider')
  }
  return context
}

// Define props for the provider component
interface DashboardProviderProps {
  children: ReactNode
}

// Create the provider component
export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const value = {
    expandedSection,
    setExpandedSection,
  }

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}
