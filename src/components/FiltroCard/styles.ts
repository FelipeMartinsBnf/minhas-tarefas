import styled from 'styled-components'

type Pops = {
  $ativo?: boolean
}

export const Card = styled.div<Pops>`
  padding: 8px;
  border: 1px solid ${(props) => (props.$ativo ? '#1e90FF' : '#a1a1a1')};
  background-color: ${(props) => (props.$ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.$ativo ? '#1e90FF' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
