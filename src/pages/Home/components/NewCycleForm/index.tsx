import { useFormContext } from 'react-hook-form'

import * as S from './styles'
import { useCycle } from '../../../../hooks/useCycle'

export const NewCycleForm = () => {
  const { activeCycle } = useCycle()
  const { register } = useFormContext()

  return (
    <S.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <S.TaskInput
        type="text"
        id="task"
        placeholder="Dê um nome para seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
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
        min={10}
        max={60}
        disabled={!!activeCycle}
        placeholder="00"
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />
      <span>minutos.</span>
    </S.FormContainer>
  )
}
