import styled, { keyframes } from 'styled-components'
import { ButtonProps } from '.'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-1);

  }
  100% {
    opacity: 1;
    transform: translateY(-10px);
  }
`

export const ContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: transparent;

  p {
    display: none;
    position: absolute;
    bottom: 0;
    background-color: transparent;
    font-size: ${({ theme }) => theme.fontSize.smaler};
    animation: ${fadeIn} 0.1s ease-in-out forwards;
    width: max-content;

    @media screen and (min-width: 768px) {
      bottom: 10px;
    }
  }

  &:hover p {
    display: block;
  }
`
export const ButtonStyle = styled.button<ButtonProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
`
