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

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    color: ${theme.colors['gray-100']};

    font-size: 1.125rem;
    font-weight: bold;
  `}
`

export const BaseInput = styled.input`
  ${({ theme }) => css`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${theme.colors['gray-500']};
    font-size: 1.125rem;
    font-weight: bold;
    color: ${theme.colors['gray-100']};

    &::placeholder {
      color: ${theme.colors['gray-500']};
    }

    &:focus {
      box-shadow: none;
      border-color: ${theme.colors['green-500']};
    }
  `}
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

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
  `}
`

export const StartCountdownButton = styled.button`
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

    cursor: pointer;

    background-color: ${theme.colors['green-500']};
    color: ${theme.colors['gray-100']};

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }

    &:not(:disabled):hover {
      background-color: ${theme.colors['green-700']};
    }
  `}
`
