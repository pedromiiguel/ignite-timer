import { Play } from 'phosphor-react'

import * as S from './styles'

export const Home = () => {
  return (
    <S.HomeContainer>
      <S.Form action="">
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para seu projeto"
            list="task-suggestions"
          />
          <datalist id="task-suggestions">
            <option value="projeto 1" />
            <option value="projeto 2" />
            <option value="projeto 3" />
            <option value="projeto 4" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <S.MinutesAmountInput
            type="number"
            id="minutesAmount"
            step={10}
            min={0}
            max={60}
            placeholder="00"
          />
          <span>minutos.</span>
        </S.FormContainer>

        <S.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>: </S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>
        <S.StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </S.StartCountdownButton>
      </S.Form>
    </S.HomeContainer>
  )
}
