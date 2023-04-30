import { render, screen } from '@testing-library/react'
import { DefaultLayout } from '.'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

jest.mock('../../components/Header', () => {
  return {
    Header: () => <div data-testid="mocked-header" />,
  }
})

jest.mock('react-router-dom', () => {
  return {
    Outlet: () => <div data-testid="mocked-outlet" />,
  }
})
describe('<DefaultLayout />', () => {
  it('should render header component', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <DefaultLayout />
      </ThemeProvider>,
    )

    const mockedHeader = screen.getByTestId('mocked-header')
    expect(mockedHeader).toBeInTheDocument()
  })

  it('should render outlet component', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <DefaultLayout />
      </ThemeProvider>,
    )
    const mockedOutlet = screen.getByTestId('mocked-outlet')
    expect(mockedOutlet).toBeInTheDocument()
  })
})
