import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import * as S from './styles'

export const DefaultLayout = () => {
  return (
    <S.LayoutContainer>
      <S.Content>
        <Header />
        <Outlet />
      </S.Content>
    </S.LayoutContainer>
  )
}
