import styled, { css } from 'styled-components'

export const LayoutContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    max-width: 74rem;
    height: calc(100vh - 10rem);
    margin: 5rem 0.5rem;
    padding: 2.5rem;

    @media (max-width: 768px) {
      padding: 2.5rem 1rem;
      margin: 3rem 0.5rem;
      height: calc(100vh - 6rem);
    }

    background: ${theme.colors['gray-800']};
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    overflow: hidden;
    overflow-y: auto;
  `}
`
