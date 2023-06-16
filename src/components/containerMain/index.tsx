import { ReactNode } from 'react'
import { Container } from './style'
import { TopBar } from '../TopBar'

interface ContainerAppProps {
  children: ReactNode
}

const ContainerMain = ({ children }: ContainerAppProps) => {
  return (
    <>
      <TopBar />
      <Container>{children}</Container>
    </>
  )
}
export default ContainerMain
