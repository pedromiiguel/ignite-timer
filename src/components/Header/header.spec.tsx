import { ThemeProvider } from 'styled-components'
import { Header } from '.'
import { defaultTheme } from '../../styles/themes/default'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('<App/>', () => {
  it('should render header', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Header />
      </ThemeProvider>,
      { wrapper: BrowserRouter },
    )

    const img = screen.getByRole('img', { name: /logo ignite/i })
    const timerLink = screen.getByTitle('Timer')
    const historyLink = screen.getByTitle('History')

    expect(img).toBeInTheDocument()
    expect(timerLink).toBeInTheDocument()
    expect(historyLink).toBeInTheDocument()
  })
})
