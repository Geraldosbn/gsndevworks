import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.text}`};
`
