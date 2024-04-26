import { Play } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  CountContainer,
  FormContainer,
  HomeContainer,
  MinuteAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle(data) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task
  
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projecto"
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
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
