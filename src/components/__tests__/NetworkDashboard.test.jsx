import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import NetworkDashboard from '../NetworkDashboard'

describe('NetworkDashboard', () => {
  it('renders network stats and sections', () => {
    render(<NetworkDashboard currentUserId="user-1" />)
    expect(screen.getByText(/network stats/i)).toBeInTheDocument()
    expect(screen.getAllByText(/following/i).some(el => el.tagName === 'H2')).toBe(true)
    expect(screen.getAllByText(/followers/i).some(el => el.tagName === 'H2')).toBe(true)
    expect(screen.getAllByText(/recent messages/i).some(el => el.tagName === 'H2')).toBe(true)
  })

  it('opens messaging modal when message button is clicked', async () => {
    render(<NetworkDashboard currentUserId="user-1" />)
    const messageButtons = screen.getAllByText(/message/i)
    fireEvent.click(messageButtons[0])
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /messages/i })).toBeInTheDocument()
    })
  })
})
