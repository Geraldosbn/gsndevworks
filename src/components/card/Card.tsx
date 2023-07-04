import { ReactNode } from 'react'
import * as S from './style'

interface CardProps {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <S.Container>{children}</S.Container>
}
