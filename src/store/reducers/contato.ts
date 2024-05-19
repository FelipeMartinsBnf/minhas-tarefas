import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../Models/contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      email: 'felipe@gmail.com',
      nome: 'Felipe M',
      numero: '(35) 98702-9923'
    },
    {
      id: 2,
      email: 'MariaH@jão.com',
      nome: 'Maria',
      numero: '(21) 9870-2312'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const VerificarContato = state.itens.find(
        (contato) => contato.numero === action.payload.numero
      )
      if (VerificarContato) {
        alert('Esse número já foi cadastrado!')
      } else {
        const UltimaTarefa = state.itens[state.itens.length - 1]

        state.itens.push({
          nome: action.payload.nome,
          email: action.payload.email,
          numero: action.payload.numero,
          id: UltimaTarefa ? UltimaTarefa.id + 1 : 1
        })
      }
    },
    editar: (state, action: PayloadAction<Contato>) => {
      state.itens.map((e) => {
        console.log(e.id, action.payload.id)
      })
      const indexContato = state.itens.findIndex(
        (c) => c.id == action.payload.id
      )
      if (indexContato >= 0) {
        console.log(action.payload)
        state.itens[indexContato] = action.payload
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { adicionar, editar, remover } = contatoSlice.actions
export default contatoSlice.reducer
