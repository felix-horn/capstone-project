import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import UndoIcon from '@material-ui/icons/Undo'

Footer.propTypes = {
  onClick: PropTypes.func.isRequired,
  stateButtonUndo: PropTypes.string,
  className: PropTypes.string,
}

export default function Footer({ onClick, stateButtonUndo, className }) {
  const color = getColorUndoIcon()
  return (
    <FooterLayout className={className}>
      <UndoIcon onClick={onClick} style={{ color }} data-testid="undo-button" />
    </FooterLayout>
  )
  function getColorUndoIcon() {
    switch (stateButtonUndo) {
      case 'inactive':
        return 'var(--light-gray)'
      case 'active':
        return 'var(--dark-gray)'
      default:
        return 'var(--white)'
    }
  }
}

const FooterLayout = styled.div`
  box-shadow: var(--light-box-shadow-up);
  height: 60px;
  max-width: 450px;
  background-color: var(--white);
  display: grid;
  place-items: center;
`
