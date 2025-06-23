import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import AuthSystem from '../AuthSystem'

describe('AuthSystem', () => {
  it('renders login form', async () => {
    render(<AuthSystem portal="investor" />)
    expect(screen.getByText(/welcome back/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(screen.getByText(/sign in to investor portal/i)).toBeInTheDocument()
  })

  it('handles login and logout flow', async () => {
    render(<AuthSystem portal="investor" />)
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: 'test@example.com' },
    })
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password123' } })
    fireEvent.click(screen.getByText(/sign in to investor portal/i))
    await waitFor(() => {
      expect(screen.queryByText(/sign in to investor portal/i)).not.toBeInTheDocument()
    })
  })
})
