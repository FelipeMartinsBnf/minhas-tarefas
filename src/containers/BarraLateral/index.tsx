import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import * as Enums from '../../utils/enums/tarefa'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import { Btn, Campo } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alterarTermo(e.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={Enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCard
                valor={Enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluídas"
              />
              <FiltroCard
                valor={Enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
              />
              <FiltroCard
                valor={Enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
              />
              <FiltroCard
                valor={Enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Btn type="button" onClick={() => navigate('/')}>
            Voltar a lista de Tarefas
          </Btn>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
