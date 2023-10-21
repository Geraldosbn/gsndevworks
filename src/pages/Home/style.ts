import styled from 'styled-components'

export const Container = styled.div``

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  background-color: inherit;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`
