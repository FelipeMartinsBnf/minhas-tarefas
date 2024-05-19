import styled from 'styled-components'
import _var from '../../styles/var'
import { Btn } from '../../styles'

export const DivContato = styled.div`
  border-bottom: 1px solid ${_var.light};
  font-size: 16px;
  margin: 10px 0;
  border-radius: 4px;
  padding: 20px;
`

export const DadosDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  Dados {
    font-size: 18px;
    font-weight: normal;
  }

  span {
    text-align: center;
  }
`

export const Dados = styled.textarea`
  width: 100%;
  background-color: transparent;
  resize: none;
  border: none;
  font-size: 22px;
  font-weight: bold;
  margin-right: 10px;
  height: 28px;

  &:enabled {
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
`

export const BtnEditar = styled(Btn)`
  background-color: #fff;
  color: ${_var.medium};
  text-align: right;
  margin-right: 5px;
  margin-bottom: 4px;
`
export const BtnRemover = styled(Btn)`
  color: red;
`
export const EditandoText = styled.div`
  font-size: px;
  color: red;
`
