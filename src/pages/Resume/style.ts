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
`
export const CardContainer = styled.div`
  background-color: #475166;
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 20px;
  border-radius: 8px;
  width: 95%;
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

  @media screen and (min-width: 768px) {
    height: 110px;
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
    bottom: -30px;
    background-color: transparent;
    width: max-content;
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
