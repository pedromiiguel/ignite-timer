import { render, screen } from '@testing-library/react'
import App from './App'
describe('Jest', () => {
  it('testing jest', () => {
    expect(1).toBe(1)
  })
  it('<App/>', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Hello world' }))
    // expect(screen.getByText(/olá meu nome é pedro/i))
  })
})
