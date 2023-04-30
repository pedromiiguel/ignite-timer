import styled, { css } from 'styled-components'

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
