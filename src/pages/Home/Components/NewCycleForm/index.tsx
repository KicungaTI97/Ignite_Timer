import { zodResolver } from '@hookform/resolvers/zod'
import { FormContainer, TaskInput, MinuteAmountInput } from './styles'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no maximo 60 minutos'),
})

type NewCycleFormDate = zod.infer<typeof newCycleFormValidationSchema>
export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormDate>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

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
