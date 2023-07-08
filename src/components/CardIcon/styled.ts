import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const moveIcon = keyframes`
  0% {
     transform: translateX(-50px);
    }
  12.5% {
     transform: translate(50px, -20px);
    }
  25% {
     transform: translate(-50px,-20px);
    }
  37.5% {
     transform: translate(50px,20px);
    }
  50% {
     transform: translate(-50px, 20px);
    }
  62.5% {
     transform: translate(50px, -20px);
    }
  100% {
     transform: translate(0);
    }

`

export const ContentIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background: transparent;
  position: relative;

  p {
    display: none;
    position: absolute;
    bottom: -40px;
    background-color: transparent;
    width: max-content;
    font-size: ${({ theme }) => theme.fontSize.smaler};
    animation: ${fadeIn} 0.1s ease-in-out forwards;

    @media screen and (min-width: 768px) {
      bottom: -50px;
      font-size: ${({ theme }) => theme.fontSize.medium};
    }
  }

  &:hover p {
    display: block;
  }

  &:hover svg {
    animation: ${moveIcon} 2s alternate infinite;
  }
`
