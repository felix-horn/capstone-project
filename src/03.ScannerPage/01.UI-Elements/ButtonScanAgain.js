import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import CropFreeIcon from '@material-ui/icons/CropFree'

ButtonScanAgain.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function ButtonScanAgain({
  onClick,
  isBarcodeInDatabase,
  className,
}) {
  return (
    <ButtonScanAgainStyled onClick={onClick} className={className}>
      <CropFreeIcon />
      {isBarcodeInDatabase ? 'weiteren Code scannen' : 'erneut scannen'}
    </ButtonScanAgainStyled>
  )
}

const ButtonScanAgainStyled = styled.button`
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
`
