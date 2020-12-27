import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import UndoIcon from '@material-ui/icons/Undo'


Footer.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  isButtonUndoActive: PropTypes.bool,
}

export default function Footer({ onClick, className, isButtonUndoActive }) {
  
  return (
    <FooterLayout className={className}>
        <DynamicUndoIcon onClick={onClick} isButtonUndoActive={isButtonUndoActive} />
    </FooterLayout>
  )
}

const FooterLayout = styled.div`
  height: 60px;
  max-width: 450px;
  background-color: var(--white);
  display: grid;
  place-items: center;
  box-shadow: var(--light-box-shadow-up);
`

const DynamicUndoIcon = styled(UndoIcon)`
  color: ${(props) => (props.isButtonUndoActive ? 'var(--dark-gray)' : 'var(--light-gray)')};
`
