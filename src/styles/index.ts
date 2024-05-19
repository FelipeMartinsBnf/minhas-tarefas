import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './var'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    color: ${variaveis.dark};
  }
  body{
    background-color: white;
  }
`

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 40px auto;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px auto;
`

export const Btn = styled.button`
  border: none;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid ${variaveis.light};
  border-radius: 6px;
`

export default EstiloGlobal
