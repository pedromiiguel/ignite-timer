import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import * as S from './styles'

export const DefaultLayout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  )
}
