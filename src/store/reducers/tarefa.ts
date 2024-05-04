import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as Enuns from '../../utils/enums/tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar React',
      prioridade: Enuns.Prioridade.NORMAL,
      status: Enuns.Status.CONCLUIDA,
      titulo: 'Estudar React Web com JavaScript'
    },
    {
      id: 2,
      descricao: 'Estudar Python',
      prioridade: Enuns.Prioridade.URGENTE,
      status: Enuns.Status.PENDENTE,
      titulo: 'Estudar TypeScript '
    },
    {
      id: 3,
      descricao: 'Estudar Grau de moto b3',
      prioridade: Enuns.Prioridade.IMPORTANTE,
      status: Enuns.Status.PENDENTE,
      titulo: 'Estudar Grau de moto b3'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      if (tarefaExiste) {
        alert('Já existe uma tarefa com este nome!')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexTarefa >= 0) {
        state.itens[indexTarefa].status = action.payload.finalizado
          ? Enuns.Status.CONCLUIDA
          : Enuns.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions
export default tarefasSlice.reducer
