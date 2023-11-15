import styled, { keyframes } from 'styled-components'

const fadeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  gap: 2rem;
  background-color: inherit;
  animation: ${fadeInRight} 0.5s ease-in-out;
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`
export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;
  @media (max-width: 425px) {
    width: 100%;
  }
`

export const Title = styled.span`
  background-color: inherit;
  font-size: 1.5rem;
  color: #718096;
`

export const UserName = styled.h2`
  background-color: inherit;
  font-size: 2rem;
  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.primaryBackgroundColor};
  background-color: ${({ theme }) => theme.colors.secondaryText};
  border: none;
  margin-top: 5px;
  padding: 5px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`

export const Image = styled.img`
  border-radius: 50%;
  border-width: 4px;
  border-style: solid;
  border-color: ${({ theme }) => theme.primary};
  max-width: 100%;

  animation: ${fadeLeft} 0.5s ease-in-out;

  @media (max-width: 640px) {
    margin: auto;
  }
`

export const WordBold = styled.span`
  background: inherit;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondaryText};
`

export const Content = styled.p`
  margin-bottom: 10px;
  background: inherit;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`
