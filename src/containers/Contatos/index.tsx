import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Container } from '../../styles'
import { RootReducer } from '../../store'

const Contatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)
  return (
    <Container>
      {itens.map((item) => (
        <Contato
          key={item.numero}
          nome={item.nome}
          numero={item.numero}
          email={item.email}
          id={item.id}
        />
      ))}
    </Container>
  )
}

export default Contatos
