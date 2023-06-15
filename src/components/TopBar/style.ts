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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 165px;
  background-color: #1d2941;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.primaryText}`};

  @media screen and (min-width: 768px) {
    height: 180px;
  }
  @media screen and (min-width: 1024px) {
    height: 200px;
  }
`

export const ContainerTools = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: inherit;
`
export const MsgDarkMode = styled.p`
  position: absolute;
  top: 10px;
  right: 35px;
  transform: translateX(10%);
  background-color: #34425f;
  padding: 5px;
  font-size: ${({ theme }) => theme.fontSize.smaler};
  border-radius: 4px;
  width: 266px;
  text-align: center;
  animation: ${fadeIn} 0.3s ease-in-out forwards;

  @media screen and (min-width: 1024px) {
    right: 45px;
  }
`
export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  background-color: inherit;
`
export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  background-color: inherit;
  cursor: pointer;
`
export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  background-color: inherit;

  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`
export const ContainerSubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  background-color: inherit;
`
export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.fontSize.small};
  background-color: inherit;
`
export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 10px;
  background-color: inherit;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
