import React from 'react'
import * as S from './style'
import TopBar from '../TopBar'

interface ContainerAppProps {
  children: React.ReactNode
}

export default function ContainerMain({ children }: ContainerAppProps) {
  return (
    <>
      <TopBar />
      <S.Container>
        <S.CenterContainer>{children}</S.CenterContainer>
      </S.Container>
    </>
  )
}
