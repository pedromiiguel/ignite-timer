import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Hello world</h1>
      <p>Olá meu nome é Pedro</p>
    </ThemeProvider>
  )
}

export default App
