import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import CropFreeIcon from '@material-ui/icons/CropFree'

ButtonScanAgain.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function ButtonScanAgain({ onClick, className }) {
  return (
    <ButtonScanAgainStyled onClick={onClick} className={className}>
      <CropFreeIcon />
      Erneut scannen
    </ButtonScanAgainStyled>
  )
}

const ButtonScanAgainStyled = styled.button`
  border-radius: 5px;
  border: var(--border);
  outline: none;
  background-color: var(--white);
  padding: 5px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--dark-gray) !important;
`
