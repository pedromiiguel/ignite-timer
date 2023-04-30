import styled, { css } from 'styled-components'

export const CountdownContainer = styled.div`
  ${({ theme }) => css`
    font-family: 'Roboto Mono', sans-serif;
    font-size: 10rem;
    line-height: 8rem;

    color: ${theme.colors['gray-100']};

    display: flex;
    gap: 1rem;

    > span {
      background: ${theme.colors['gray-700']};
      padding: 2rem 1rem;
      border-radius: 8px;
    }

    @media (max-width: 768px) {
      font-size: 5rem;
      line-height: 4rem;
    }

    @media (max-width: 450px) {
      font-size: 2.5rem;
      line-height: 2rem;
      gap: 0.5rem;
    }
  `}
`

export const Separator = styled.div`
  ${({ theme }) => css`
    padding: 2rem 0;
    color: ${theme.colors['green-500']};

    width: 4rem;
    overflow: hidden;

    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      width: 2rem;
    }

    @media (max-width: 450px) {
      width: 1rem;
    }
  `}
`
