import { ReactNode } from 'react'
import { Container } from './style'
import { TopBar } from '../../components/TopBar'

interface ContainerAppProps {
  children: ReactNode
}

export const ContainerApp = ({ children }: ContainerAppProps) => {
  return (
    <Container>
      <TopBar />
      {children}
    </Container>
  )
}
