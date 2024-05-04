import * as Enuns from '../utils/enums/tarefa'

class Tarefa {
  titulo: string
  prioridade: Enuns.Prioridade
  status: Enuns.Status
  descricao: string
  id: number

  constructor(
    titulo: string,
    prioridade: Enuns.Prioridade,
    status: Enuns.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
