import { Play } from 'phosphor-react'
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
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projecto"
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

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
