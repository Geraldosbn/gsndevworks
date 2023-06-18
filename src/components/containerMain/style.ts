import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  width: 100%;
`
export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    width: 90%;
  }

  @media screen and (min-width: 1440px) {
    width: 75%;
  }
`
