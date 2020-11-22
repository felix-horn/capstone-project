import styled from 'styled-components/macro'
import UndoIcon from '@material-ui/icons/Undo'

export default function UndoButton({ undoDelete }) {
  return <UndoIconStyled onClick={undoDelete} />
}

const UndoIconStyled = styled(UndoIcon)`
  color: #757575;
`
