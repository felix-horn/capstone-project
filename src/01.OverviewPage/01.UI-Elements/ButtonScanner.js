import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
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
      <IconBackgroundStyled>
        <ScannerIconStyled />
      </IconBackgroundStyled>
    </ButtonScannerStyled>
  )
}

const ButtonScannerStyled = styled(NavLink)`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 15px;
  color: var(--almost-black);
  font-weight: 400;
  font-size: 0.8rem;
  text-decoration: none;
`

const IconBackgroundStyled = styled.div`
  box-shadow: var(--strong-box-shadow);
  border-radius: 100%;
  height: 50px;
  width: 50px;
  background-color: var(--CTA-blue);
  display: grid;
  place-items: center;
`

const ScannerIconStyled = styled(CropFreeIcon)`
  color: var(--white);

  animation: 0.2s ease-in-out 0s 1 rotate;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }
`
