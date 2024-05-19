import Formulario from '../../components/Formulario'
import { HeaderContainer } from '../../styles'
import { Titulo } from './styles'

const Title = () => {
  return (
    <HeaderContainer>
      <Titulo>Lista de Contatos</Titulo>
      <Formulario />
    </HeaderContainer>
  )
}

export default Title
