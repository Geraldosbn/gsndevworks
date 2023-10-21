import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './theme/theme'
import Pages from './pages'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Pages />
    </ThemeProvider>
  )
}

export default App
