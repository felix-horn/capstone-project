import styled from 'styled-components/macro'
import UndoIcon from '@material-ui/icons/Undo'

export default function UndoButton({ undoDelete }) {
  return (
    <UndoButtonStyled>
      <UndoIconStyled onClick={undoDelete} />
    </UndoButtonStyled>
  )
}

const UndoButtonStyled = styled.div`
  box-shadow: 0 1px 3px #0004;
  height: 40px;
  width: 85px;
  border-radius: 20px;
  background: white;
  display: grid;
  place-items: center;
`

const UndoIconStyled = styled(UndoIcon)`
  color: #757575;
`
