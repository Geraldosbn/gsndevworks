import styled, { keyframes } from 'styled-components'

interface DivProps {
  icon?: string
}

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const CardContainer = styled.div`
  background-color: #475166;
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`
export const Title = styled.h2`
  color: #50bddb;
  margin-bottom: 10px;
  background: transparent;
`
export const Company = styled.h4`
  color: #50bddb;
  margin-bottom: 10px;
  background: transparent;
`
export const Span = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.smaler};
  background: transparent;
`
export const Content = styled.p`
  font-size: ${({ theme }) => theme.fontSize.smaler};
  margin: 10px 0;
  background: transparent;
`
export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  height: 150px;
  padding-bottom: 10px;
`

const switchPosition = (icon?: string) => {
  switch (icon) {
    case 'React':
      return { botton: '-20px', right: '5px' }
    case 'Query':
      return { botton: '-20px', right: '-16px' }
    case 'SComponents':
      return { botton: '-40px', right: '-25px' }
    case 'Typescript':
      return { botton: '-25px', right: '-10px' }
    case 'Redux':
      return { botton: '-25px', right: '5px' }
    default:
      return { botton: '-20px', right: '0px' }
  }
}

export const ContentIcon = styled.div<DivProps>`
  margin: 5px;
  background: transparent;
  position: relative;

  p {
    display: none;
    position: absolute;
    bottom: ${props => switchPosition(props.icon).botton};
    right: ${props => switchPosition(props.icon).right};
    background-color: transparent;
    width: ${props => (props.icon === 'Query' ? 'max-content' : 'auto')};
    font-size: ${({ theme }) => theme.fontSize.small};
    animation: ${fadeIn} 0.3s ease-in-out forwards;
  }

  &:hover p {
    display: block;
  }

  &:hover svg {
    animation: ${rotate} 1s linear infinite;
  }
`
