import { useDispatch } from 'react-redux'
import { BtnSalvar, FomularioStyle, Input } from './styles'
import { adicionar } from '../../store/reducers/contato'
import { FormEvent, useState } from 'react'

const Formulario = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const dispatch = useDispatch()

  const CadastrarContato = (e: FormEvent) => {
    e.preventDefault()
    dispatch(adicionar({ nome: nome, numero: numero, email: email }))
    setNome('')
    setEmail('')
    setNumero('')
  }

  return (
    <div>
      <span>Adicionar Novo Contato: </span>
      <FomularioStyle>
        <label htmlFor="Nome">Nome:</label>
        <Input
          name="Nome"
          placeholder="Nome do contato"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="Numero">Numero:</label>
        <Input
          name="Numero"
          placeholder="Número"
          type="text"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <label htmlFor="email">E-mail:</label>
        <Input
          name="email"
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <BtnSalvar onClick={CadastrarContato}>Salvar</BtnSalvar>
      </FomularioStyle>
    </div>
  )
}

export default Formulario
