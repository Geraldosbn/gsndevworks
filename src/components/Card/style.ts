import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  max-width: 90%;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8);
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};

  @media screen and (min-width: 1440px) {
    width: 70%;
  }
`
