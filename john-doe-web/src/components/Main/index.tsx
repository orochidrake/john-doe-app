import GlobalStyles from '@/styles/global'
import * as S from './styles'
import FormComponent from '../../components/Form'


export default function Main() {
  return (
    <>
      <GlobalStyles />
      <S.Main>
        <FormComponent/>
      </S.Main>
    </>
  )
}
