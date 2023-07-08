import * as S from './style'
import TopBar from '../TopBar'
import { ReactNode } from 'react'

interface ContainerAppProps {
  children: ReactNode
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
