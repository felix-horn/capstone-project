import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import CropFreeIcon from '@material-ui/icons/CropFree'
import SaveIcon from '@material-ui/icons/Save'
import StorageIcon from '@material-ui/icons/Storage'
import ListIcon from '@material-ui/icons/List'

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function Button({ title, onClick, className }) {
  return (
    <ButtonStyled onClick={onClick} className={className}>
      {title === 'Speichern' && <SaveIcon />}
      {title === 'Erneut scannen' && <CropFreeIcon />}
      {title}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  border-radius: 5px;
  border: var(--border);
  outline: none;
  background-color: var(--white);
  padding: 5px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--dark-gray) !important;
  white-space: nowrap;

  &.primary {
    box-shadow: var(--strong-box-shadow);
    border: none;
    background-color: var(--CTA-blue);
    padding: 10px 15px;
    color: var(--white) !important;
  }
`
