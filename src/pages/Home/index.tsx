import { Container } from './style'
import { TopBar } from '../../components/TopBar'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <Container>
      <TopBar />
      <Outlet />
    </Container>
  )
}
