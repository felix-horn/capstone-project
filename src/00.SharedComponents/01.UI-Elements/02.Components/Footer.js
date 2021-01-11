import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import UndoIcon from '@material-ui/icons/Undo'

Footer.propTypes = {
  onClick: PropTypes.func.isRequired,
  visibilityButtonUndo: PropTypes.string,
  className: PropTypes.string,
}

export default function Footer({ onClick, visibilityButtonUndo, className }) {
  const colorUndoIcon = getColorUndoIcon()
  return (
    <FooterLayout className={className}>
      <UndoIcon
        onClick={onClick}
        style={{ color: colorUndoIcon }}
        data-testid="undo-button"
      />
    </FooterLayout>
  )
  function getColorUndoIcon() {
    switch (visibilityButtonUndo) {
      case 'grayedOut':
        return 'var(--light-gray)'
      case 'shown':
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
