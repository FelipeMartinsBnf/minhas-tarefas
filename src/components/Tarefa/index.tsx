import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefa'
import * as Enuns from '../../utils/enums/tarefa'
import * as S from './styles'
import TarefaClass from '../../models/Tarefa'
import { Btn, BtnSalvar } from '../../styles'

// type Props = {
//   titulo: string
//   prioridade: enums.Prioridade
//   status: enums.Status
//   descricao: string
// }

type Props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  prioridade,
  status,
  titulo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [EstaEditando, setEstaEditando] = useState(false)
  const [desc, setdesc] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setdesc(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function CalcelarEdit() {
    setdesc(descricaoOriginal)
    setEstaEditando(false)
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, finalizado: evento.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          checked={status === Enuns.Status.CONCLUIDA}
          id={titulo}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {EstaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag $parametro="prioridade" $prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag $parametro="status" $status={status}>
        {status}
      </S.Tag>
      <S.Desc
        disabled={!EstaEditando}
        value={desc}
        onChange={(e) => {
          setdesc(e.target.value)
        }}
      />
      <S.BarraAct>
        {EstaEditando ? (
          <>
            <BtnSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao: desc,
                    prioridade,
                    status,
                    titulo,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BtnSalvar>
            <S.BtnCancelar onClick={CalcelarEdit}>Cancelar</S.BtnCancelar>
          </>
        ) : (
          <>
            <Btn onClick={() => setEstaEditando(true)}>Editar</Btn>
            <S.BtnCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BtnCancelar>
          </>
        )}
      </S.BarraAct>
    </S.Card>
  )
}

export default Tarefa
