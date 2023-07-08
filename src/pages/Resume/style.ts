import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: #475166;
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 20px;
  border-radius: 8px;
  width: 95%;
  margin-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`
export const Title = styled.h2`
  color: #50bddb;
  margin-bottom: 10px;
  background: transparent;
`
export const Company = styled.h4`
  color: #50bddb;
  margin-bottom: 10px;
  background: transparent;
`
export const Span = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.smaler};
  background: transparent;

  @media screen and (min-width: 720px) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`
export const Content = styled.p`
  font-size: ${({ theme }) => theme.fontSize.smaler};
  margin: 10px 0;
  background: transparent;

  @media screen and (min-width: 720px) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`
export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  height: 150px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    height: 110px;
    padding-bottom: 10px;
  }
`
