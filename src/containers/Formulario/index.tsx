import { FormEvent, useState } from 'react'
import { BtnSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcao, Opcoes } from './styles'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as Enums from '../../utils/enums/tarefa'
import { cadastrar } from '../../store/reducers/tarefa'

const Formulario = () => {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setprioridade] = useState(Enums.Prioridade.NORMAL)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        titulo,
        prioridade,
        status: Enums.Status.PENDENTE,
        descricao
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          as="textarea"
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          placeholder="Descição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(Enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                type="radio"
                name="prioridade"
                id={prioridade}
                defaultChecked={prioridade === Enums.Prioridade.NORMAL}
                onChange={(e) =>
                  setprioridade(e.target.value as Enums.Prioridade)
                }
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BtnSalvar type="submit">Cadastrar</BtnSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
