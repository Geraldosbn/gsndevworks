import React from 'react'
import * as S from './styled'

export interface CardIconProps {
  icon: React.ReactNode
  label?: string
}

export default function CardIcon({ icon, label }: CardIconProps) {
  return (
    <S.ContentIcon>
      {icon}
      {label && <p>{label}</p>}
    </S.ContentIcon>
  )
}
