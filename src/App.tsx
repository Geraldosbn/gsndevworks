import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './theme/theme';
import AppRoutes from './Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
