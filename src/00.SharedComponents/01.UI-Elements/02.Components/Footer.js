import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import UndoIcon from '@material-ui/icons/Undo'

Footer.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  visibilityButtonUndo: PropTypes.string,
}

export default function Footer({ onClick, className, visibilityButtonUndo }) {
  return (
    <FooterLayout className={className}>
      <DynamicUndoIcon
        onClick={onClick}
        visibilityButtonUndo={visibilityButtonUndo}
        data-testid="undo-button"
      />
    </FooterLayout>
  )
}

const FooterLayout = styled.div`
  box-shadow: var(--light-box-shadow-up);
  height: 60px;
  max-width: 450px;
  background-color: var(--white);
  display: grid;
  place-items: center;
`

const DynamicUndoIcon = styled(UndoIcon)`
  color: ${(props) => {
    // eslint-disable-next-line default-case
    switch (props.visibilityButtonUndo) {
      case 'hidden':
        return 'var(--white)'
      case 'grayedOut':
        return 'var(--light-gray)'
      case 'shown':
        return 'var(--dark-gray)'
    }
  }};
`
