import { Header } from '.'
import { defaultTheme } from '../../styles/themes/default'
import { fireEvent, render, screen } from '../../utils/test-utils'

describe('<Header/>', () => {
  it('should render correctly', () => {
    render(<Header />)

    const img = screen.getByRole('img', { name: /logo ignite/i })
    const timerLink = screen.getByTitle('Timer')
    const historyLink = screen.getByTitle('History')

    expect(img).toBeInTheDocument()
    expect(timerLink).toBeInTheDocument()
    expect(historyLink).toBeInTheDocument()
  })

  it('should have active styles when a nav link is clicked', () => {
    render(<Header />)

    const timerLink = screen.getByTitle('Timer')
    const historyLink = screen.getByTitle('History')

    expect(timerLink).toHaveStyle({ color: defaultTheme.colors['green-500'] })
    expect(historyLink).not.toHaveStyle({
      color: defaultTheme.colors['green-500'],
    })
    fireEvent.click(historyLink)

    expect(historyLink).toHaveStyle({
      color: defaultTheme.colors['green-500'],
    })
  })
})
