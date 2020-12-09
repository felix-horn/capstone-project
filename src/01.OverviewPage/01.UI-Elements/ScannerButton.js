import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components/macro'
import CropFreeIcon from '@material-ui/icons/CropFree'

ScannerButton.propTypes = {
  addShop: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function ScannerButton({ className }) {
  return (
    <ScannerButtonStyled
      exact
      to="/ScannerPage"
      className={className}
      data-testid="action-button"
    >
      <ScannerIconStyled />
    </ScannerButtonStyled>
  )
}

const ScannerButtonStyled = styled(NavLink)`
  box-shadow: var(--box-shadow);
  border-radius: 100%;
  height: 50px;
  width: 50px;
  background-color: var(--white);
  opacity: 0.5;
  display: grid;
  place-items: center;
`
const ScannerIconStyled = styled(CropFreeIcon)`
  color: var(--dark-gray);
`
