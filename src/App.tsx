import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './theme/theme'
import AppRoutes from './Routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
