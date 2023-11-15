import * as S from './style'
import TopBar from '../../components/TopBar'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <S.Container>
      <TopBar />
      <S.Main>
        <Outlet />
      </S.Main>
    </S.Container>
  )
}
