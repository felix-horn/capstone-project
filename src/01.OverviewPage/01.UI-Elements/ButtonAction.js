import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components/macro'
import MenuIcon from '@material-ui/icons/Menu'

ButtonAction.propTypes = {
  className: PropTypes.string,
}

export default function ButtonAction({ onClick, className }) {
  return (
    <ButtonActionStyled onClick={onClick} className={className}>
      <MenuIconStyled />
    </ButtonActionStyled>
  )
}

const ButtonActionStyled = styled.div`
  box-shadow: var(--box-shadow);
  border-radius: 100%;
  height: 50px;
  width: 50px;
  background-color: var(--white);
  display: grid;
  place-items: center;
`
const MenuIconStyled = styled(MenuIcon)`
  color: var(--CTA-blue);

  /* .crossRotate:active {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
  } */
`
