import styled from 'styled-components'

interface DivProps {
  isCorrect?: boolean
}

export const Question = styled.div``
export const Options = styled.div``

export const Option = styled.div<DivProps>`
  background-color: ${({ theme }) => theme.colors.secondaryBackgroundColor};
  padding: 3px;
  margin: 5px 5px 5px 0;
  border-radius: 10px;

  /* Aplicar cor verde quando a opção correta for selecionada */
  ${({ isCorrect }) => isCorrect && `background-color: green; `}
  /* ${({ isCorrect }) =>
    isCorrect ? `background-color: green;` : `background-color: red;`} */

  .label {
    margin-left: 5px;
    background-color: inherit;
  }
`
export const DivBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const Button = styled.button`
  padding: 5px;
  margin-top: 5px;
  transform: translateY(5px);
  border-radius: 10px;
`
