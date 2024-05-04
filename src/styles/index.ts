import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: FadeIn 5s;
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  border-radius: 8px;
  border-color: #666666;
  padding: 8px;
  background-color: #fff;
  font-weight: bold;
  width: 100%;
`

export const Btn = styled.button`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BtnSalvar = styled(Btn)`
  background-color: ${variaveis.verede};
`

export default EstiloGlobal
