import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryText: string
      secondaryText: string
      primaryBackgroundColor: string
      secondaryBackgroundColor: string
    }
    fontSize: {
      smaler: string
      small: string
      medium: string
      large: string
      bigLarge: string
    }
  }
}
