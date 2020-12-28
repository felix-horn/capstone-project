import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import UndoIcon from '@material-ui/icons/Undo'

UndoButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function UndoButton({ onClick, className }) {
  return (
    <UndoButtonStyled
      onClick={onClick}
      className={className}
      data-testid="undo-button"
    >
      <UndoIconStyled />
    </UndoButtonStyled>
  )
}

const UndoButtonStyled = styled.div`
  box-shadow: var(--box-shadow);
  height: 40px;
  width: 85px;
  border-radius: 20px;
  background: var(--white);
  display: grid;
  place-items: center;
`

const UndoIconStyled = styled(UndoIcon)`
  color: var(--dark-gray);
`
