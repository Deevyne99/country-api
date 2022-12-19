import { fireEvent, render, screen } from '@testing-library/react'
import Form from './Form'
import { AppProvider } from '../../Hooks/context/Context'
import { MemoryRouter } from 'react-router-dom'

test('visibility hidden for filter div', () => {
  render(
    <AppProvider>
      <Form />
    </AppProvider>,
    { wrapper: MemoryRouter }
  )
  const formOption = screen.getByTestId('filter-option')
  expect(formOption).not.toBeVisible()
})
test('check text content of placeholder', () => {
  render(
    <AppProvider>
      <Form />
    </AppProvider>,
    { wrapper: MemoryRouter }
  )
  const inputEl = screen.getByPlaceholderText(/search/i)
  expect(inputEl).toBeInTheDocument()
})
test('search should be empty', () => {
  render(
    <AppProvider>
      <Form />
    </AppProvider>,
    { wrapper: MemoryRouter }
  )
  const inputEl = screen.getByPlaceholderText(/search/i)
  expect(inputEl.value).toBe('')
})
test('handle change for the input', () => {
  render(
    <AppProvider>
      <Form />
    </AppProvider>,
    { wrapper: MemoryRouter }
  )
  const inputEl = screen.getByPlaceholderText(/search/i)
  const testValue = 'test'
  fireEvent.change(inputEl, { target: { value: testValue } })
  expect(inputEl.value).toBe(testValue)
})
