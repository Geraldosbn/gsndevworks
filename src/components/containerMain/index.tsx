import { ReactNode } from 'react'
import { CenterContainer, Container } from './style'
import TopBar from '../TopBar'

interface ContainerAppProps {
  children: ReactNode
}

const ContainerMain = ({ children }: ContainerAppProps) => {
  return (
    <>
      <TopBar />
      <Container>
        <CenterContainer>{children}</CenterContainer>
      </Container>
    </>
  )
}
export default ContainerMain
