import styled, { css } from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
`

export const BaseCountDownButton = styled.button`
  ${({ theme }) => css`
    width: 100%;

    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-weight: bold;

    color: ${theme.colors['gray-100']};

    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  `}
`

export const StartCountdownButton = styled(BaseCountDownButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors['green-500']};

    &:not(:disabled):hover {
      background-color: ${theme.colors['green-700']};
    }
  `}
`

export const StopCountdownButton = styled(BaseCountDownButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors['red-500']};

    &:not(:disabled):hover {
      background-color: ${theme.colors['red-700']};
    }
  `}
`
