import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MemoryRouter } from 'react-router-dom'
import { AppProvider } from '../../Hooks/context/Context'

import Navbar from './Navbar'

test('To inspect the heading of the page', () => {
  render(
    <AppProvider>
      <Navbar />
    </AppProvider>,
    { wrapper: MemoryRouter }
  )
  const headingElem = screen.getByText(/where in the world/i)
  expect(headingElem).toBeInTheDocument()
})

test('to test the background color of the navbar', () => {
  render(
    <AppProvider>
      <Navbar />
    </AppProvider>,
    { wrapper: MemoryRouter }
  )
  const headerElement = screen.getByTestId('header')
  expect(headerElement).toHaveStyle('background-color:rgb(	43, 57, 69)')
})
