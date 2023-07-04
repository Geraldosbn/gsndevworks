import { ReactNode } from 'react'
import * as S from './style'
import { TopBar } from '../TopBar'

interface ContainerAppProps {
  children: ReactNode
}

export const ContainerMain = ({ children }: ContainerAppProps) => {
  return (
    <>
      <TopBar />
      <S.Container>
        <S.CenterContainer>{children}</S.CenterContainer>
      </S.Container>
    </>
  )
}
