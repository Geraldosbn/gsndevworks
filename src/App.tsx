import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './Global/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
