import styled from 'styled-components'
import { ButtonProps } from '.'



export const ButtonStyle = styled.button<ButtonProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({theme})=> theme.fontSize.bigLarge} ;
`
