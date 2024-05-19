import styled from 'styled-components'
import Var from '../../styles/var'
import { Btn } from '../../styles'

export const FomularioStyle = styled.form`
  display: block;
`

export const Input = styled.input`
  border: none;
  font-size: 16px;
  padding: 8px;
  margin-right: 6px;
  margin-top: 4px;
  border-bottom: 1px solid ${Var.medium};
  border-radius: 6px;
  background-color: #dde6ed;
`
export const BtnSalvar = styled(Btn)`
  color: green;
  background-color: #fff;
`
