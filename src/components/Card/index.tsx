import { ReactNode } from 'react'
import * as S from './style'

interface CardProps {
  children: ReactNode
}

export default function Card({ children }: CardProps) {
  return <S.Container>{children}</S.Container>
}
