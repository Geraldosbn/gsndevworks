import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #475166;
  color: #dddddd;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
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
