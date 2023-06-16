import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: #475166;
  color: #dddddd;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

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
