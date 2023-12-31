import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primaryText: '#dddddd',
    secondaryText: '#50bddb',
    primaryBackgroundColor: '#020817',
    secondaryBackgroundColor: '#182334'
  },
  fontSize: {
    smaler: '14px',
    small: '16px',
    medium: '24px',
    large: '32px',
    bigLarge: '46px'
  }
}

export const GlobalStyle = createGlobalStyle`
  * {
    background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
    color: ${({ theme }) => theme.colors.primaryText};
    font-family: ui-sans-serif, system-ui, sans-serif;
    margin: 0;
    padding: 0;
  }
`
