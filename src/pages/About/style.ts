import styled from 'styled-components'

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 10px;
  background: inherit;
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
  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`
