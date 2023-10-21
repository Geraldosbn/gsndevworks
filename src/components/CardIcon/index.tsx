import * as S from './styled'
import Card from '../Card'
import { useState, useEffect } from 'react'
import moment from 'moment'

export interface Option {
  id: string
  content: string
}

export interface CardQuizProps {
  options: Option[]
  question: string
  idQuestion: string
  correct: string
}

export default function CardQuiz({
  options,
  question,
  idQuestion,
  correct
}: CardQuizProps) {
  const [response, setResponse] = useState<string>('')
  const [isAnswered, setIsAnswered] = useState<boolean | undefined>()
  const [replyDate, setReplyDate] = useState<String | null>()
  const [answered, setAnswered] = useState<String | null>()
  const currentDate = moment(new Date()).format('DD/MM/YYYY') + idQuestion
  const dateFromStorage = localStorage.getItem('registerDate')
  const answeredFromStorage = localStorage.getItem('answeredCorrect')

  useEffect(() => {
    setReplyDate(dateFromStorage)
    setAnswered(answeredFromStorage)
  }, [idQuestion])

  const handleConfirmResponse = async (response: string) => {
    if (response === '') {
      return alert('Ei, você precisa escolher um opção antes de confirmar :S')
    }

    localStorage.setItem('registerDate', currentDate)

    console.log('answeredFromStorage', answeredFromStorage)
    console.log('answered', answered)

    if (answered === answeredFromStorage) {
      return alert('Essa vc já respondeu! :)')
    }

    if (replyDate === currentDate) {
      return alert('Desculpe, amanhã você terá uma nova chace :)')
    }

    //   TODO: parei quando estava definindo a lógica de quando o usuario ja respondeu uma questao
    // e acertou não receber a msg de uma nova chace amanha e sim que ele ja respondeu

    if (response === correct) {
      setIsAnswered(true)
      alert('Acertooo, mizeravi :D')
      localStorage.setItem('answeredCorrect', idQuestion)
      setAnswered(idQuestion)

      // setTimeout(() => {
      //   setIsAnswered(false)
      // }, 500)
    } else {
      alert('Erroou!')
    }
    setReplyDate(currentDate)
  }

  const optionsContent = options.map(({ id, content }) => (
    <S.Option key={id} isCorrect={isAnswered && id === correct}>
      <input
        type='radio'
        id={id}
        name={idQuestion}
        value={content}
        onClick={() => setResponse(id)}
      />
      <label className='label' form={id}>
        {content}
      </label>
    </S.Option>
  ))

  return (
    <Card>
      <S.Question>{question}</S.Question>
      <S.Options>{optionsContent}</S.Options>
      <S.DivBottom>
        <S.Button onClick={() => handleConfirmResponse(response)}>
          Confirmar
        </S.Button>
      </S.DivBottom>
    </Card>
  )
}
