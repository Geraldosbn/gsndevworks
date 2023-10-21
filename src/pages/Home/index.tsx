import CardQuiz, { CardQuizProps } from '../../components/CardIcon'
import ContainerMain from '../../components/ContainerMain'
import * as S from './style'

export default function Home() {
  const Questions: CardQuizProps[] = [
    {
      question: 'Qual a cor do céu?',
      idQuestion: '1',
      correct: '2',
      options: [
        { id: '1', content: 'Rosa' },
        { id: '2', content: 'Azul' },
        { id: '3', content: 'Amarelo' }
      ]
    },
    {
      question: 'Qual a cor do sangue?',
      idQuestion: '2',
      correct: '1',
      options: [
        { id: '1', content: 'Vermelho' },
        { id: '2', content: 'Azul' },
        { id: '3', content: 'Amarelo' }
      ]
    },
    {
      question: 'Qual a cor da lua?',
      idQuestion: '3',
      correct: '3',
      options: [
        { id: '1', content: 'Roxo' },
        { id: '2', content: 'Azul' },
        { id: '3', content: 'Branca' }
      ]
    }
  ]

  return (
    <ContainerMain>
      <S.Title>Quiz do Gegê</S.Title>
      {Questions.map(({ question, idQuestion, correct, options }, index) => (
        <CardQuiz
          key={index}
          question={question}
          idQuestion={idQuestion}
          correct={correct}
          options={options}
        />
      ))}
    </ContainerMain>
  )
}
