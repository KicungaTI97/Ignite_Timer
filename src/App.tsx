import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

import { GlobalStyle } from './styles/themes/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { createContext } from 'react'
import { CycleContextProvider } from './contexts/CycleContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
/*
const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  */
