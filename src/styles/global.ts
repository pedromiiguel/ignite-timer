import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    ${({ theme }) => css`
      outline: 0;
      box-shadow: 0 0 0 2px ${theme.colors['green-500']};
    `}
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors['gray-900']};
      color: ${theme.colors['gray-300']};
    `}
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
