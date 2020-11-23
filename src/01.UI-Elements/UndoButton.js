import styled, { keyframes } from 'styled-components/macro'
import UndoIcon from '@material-ui/icons/Undo'

export default function UndoButton({ undoDelete, visibility }) {
  return (
    <UndoButtonStyled className={visibility}>
      <UndoIconStyled onClick={undoDelete} />
    </UndoButtonStyled>
  )
}

const fadeOut = keyframes`
    0% {
        opacity: 1;
        pointer-events: all;
    }
    90% {
        opacity: 1;
        pointer-events: all;
    }
    100%{
        opacity: 0;
        pointer-events: none;
    }
`

const UndoButtonStyled = styled.div`
  &.shown {
    box-shadow: 0 1px 3px #0004;
    height: 40px;
    width: 85px;
    border-radius: 20px;
    background: white;
    display: grid;
    place-items: center;

    animation: 6s ${fadeOut} ease forwards;
  }

  &.hidden {
    display: none;
  }
`

const UndoIconStyled = styled(UndoIcon)`
  color: #757575;
`
