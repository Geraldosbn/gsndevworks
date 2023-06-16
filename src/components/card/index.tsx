import { ReactNode } from 'react'
import { Container } from './style'

interface CardProps {
  children: ReactNode
}

const Card = ({ children }: CardProps) => {
  return <Container>{children}</Container>
}
export default Card
