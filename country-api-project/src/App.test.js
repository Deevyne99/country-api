import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../src/components/navbar/Navbar'
import { AppProvider } from './Hooks/context/Context'
test('to test if button is renedered', () => {
  render(
    <AppProvider>
      <Navbar />
    </AppProvider>,
    { wrapper: MemoryRouter }
  )
  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toBeInTheDocument()
})
