import { render, screen, fireEvent } from '@testing-library/react'
import ActivityFeed from '../ActivityFeed'

describe('ActivityFeed', () => {
  it('renders activity feed and notifications', async () => {
    render(<ActivityFeed currentUserId="user-1" />)
    expect(screen.getByText(/activity feed/i)).toBeInTheDocument()
    expect(await screen.findByText(/started following you/i)).toBeInTheDocument()
  })

  it('marks notification as read on click', async () => {
    render(<ActivityFeed currentUserId="user-1" />)
    const notification = await screen.findByText(/started following you/i)
    fireEvent.click(notification)
    expect(notification.parentElement.parentElement).not.toHaveClass('bg-blue-800/40')
  })
})
