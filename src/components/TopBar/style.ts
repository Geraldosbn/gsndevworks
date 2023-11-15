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
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.primaryText}`};
`

export const ContainerDarkMode = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: inherit;
  margin-top: 15;
  margin-right: 20;
`
export const MsgDarkMode = styled.p`
  position: absolute;
  top: 12px;
  right: 35px;
  transform: translateX(10%);
  background-color: #2f495f;
  padding: 5px;
  font-size: ${({ theme }) => theme.fontSize.smaler};
  border-radius: 4px;
  width: 266px;
  text-align: center;
  animation: ${fadeIn} 0.3s ease-in-out forwards;

  @media screen and (min-width: 1024px) {
    right: 55px;
  }
`
export const ContainerNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 1000px;
  margin: 10px;
  background-color: inherit;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    max-width: 20%;
  }
`
