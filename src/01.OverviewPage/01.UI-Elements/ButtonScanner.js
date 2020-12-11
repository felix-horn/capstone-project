import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components/macro'
import CropFreeIcon from '@material-ui/icons/CropFree'

ButtonScanner.propTypes = {
  className: PropTypes.string,
}

export default function ButtonScanner({ className }) {
  return (
    <ButtonScannerStyled
      exact
      to="/ScannerPage"
      className={className}
      data-testid="scanner-button"
    >
      Barcode scannen
      <IconWrapperStyled>
        <ScannerIconStyled />
      </IconWrapperStyled>
    </ButtonScannerStyled>
  )
}

const ButtonScannerStyled = styled(NavLink)`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: var(--almost-black);
  font-weight: 400;
  font-size: 0.8rem;
`

const IconWrapperStyled = styled.div`
  box-shadow: var(--box-shadow);
  border-radius: 100%;
  height: 50px;
  width: 50px;
  background-color: var(--CTA-blue);
  display: grid;
  place-items: center;
`

const ScannerIconStyled = styled(CropFreeIcon)`
  color: var(--white);
`
