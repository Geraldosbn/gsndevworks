import styled from 'styled-components'



export const Title = styled.h2`
  color: #50bddb;
  margin-bottom: 10px;
  background: transparent;
`

export const WordBold = styled.span`
  background: transparent;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondaryText};
`

export const Content = styled.p`
  margin-bottom: 10px;
  background: transparent;
`
