import { FormContainer, TaskInput, MinuteAmountInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CycleContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projecto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projecto 1" />
        <option value="Projecto 1" />
        <option value="Projecto 1" />
        <option value="Projecto 1" />
        <option value="Projecto 1" />
        <option value="Outro porjecto" />
      </datalist>

      <label htmlFor="minuteAmount">durante</label>
      <MinuteAmountInput
        type="number"
        id="minuteAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
