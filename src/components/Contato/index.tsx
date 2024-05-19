import { useDispatch } from 'react-redux'
import {
  Dados,
  DivContato,
  BtnEditar,
  DadosDiv,
  BtnRemover,
  EditandoText
} from './styles'
import ContatoClass from '../../Models/contato'
import { editar, remover } from '../../store/reducers/contato'
import { useState } from 'react'

type Props = ContatoClass
const Contato = (contatoProp: Props) => {
  const [editando, setEditando] = useState(false)

  const [nome, setNome] = useState(contatoProp.nome)
  const [email, setEmail] = useState(contatoProp.email)
  const [numero, setNumero] = useState(contatoProp.numero)

  const dispatch = useDispatch()

  return (
    <DivContato>
      {editando && (
        <EditandoText>
          EDITANDO: <br />
        </EditandoText>
      )}
      <Dados
        disabled={!editando}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      ></Dados>
      <DadosDiv>
        <Dados
          disabled={!editando}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Dados>
        <Dados
          disabled={!editando}
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        ></Dados>
        {editando ? (
          <span>
            <BtnEditar
              onClick={() => {
                setEditando(!editando)
                console.log(numero)
                dispatch(editar({ id: contatoProp.id, numero, nome, email }))
              }}
            >
              Salvar
            </BtnEditar>
            <BtnRemover
              onClick={() => {
                setEditando(!editando)
                setNome(contatoProp.nome)
                setEmail(contatoProp.email)
                setNumero(contatoProp.numero)
              }}
            >
              Cancelar
            </BtnRemover>
          </span>
        ) : (
          <span>
            <BtnEditar
              onClick={() => {
                setEditando(!editando)
              }}
            >
              Editar
            </BtnEditar>
            <BtnRemover
              onClick={() => {
                dispatch(remover(contatoProp.id))
              }}
            >
              Remover
            </BtnRemover>
          </span>
        )}
      </DadosDiv>
    </DivContato>
  )
}

export default Contato
