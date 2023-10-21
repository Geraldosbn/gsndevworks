import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBackgroundColor};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8);
  width: 95%;
  margin: 10px;
`
