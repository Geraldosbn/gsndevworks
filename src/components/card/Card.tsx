import React from 'react'
import * as S from './style'

interface CardProps {
  children: React.ReactNode
}

export default function Card({ children }: CardProps) {
  return <S.Container>{children}</S.Container>
}
