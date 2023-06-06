import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      text: string;
      background: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
      bigLarge: string;
    };
  }
}
