import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Menu from './Menu'

MenuWrapped.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  deleteShop: PropTypes.func.isRequired,
}

export default function MenuWrapped({ toggleMenu, deleteShop }) {
  return (
    <ClickableMenuBackground onClick={toggleMenu} data-testid="background">
      <MenuStyled deleteShop={deleteShop} />
    </ClickableMenuBackground>
  )
}

const ClickableMenuBackground = styled.div`
  position: fixed;
  z-index: 150;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const MenuStyled = styled(Menu)`
  position: fixed;
  z-index: 200;
  top: 45px;
  right: 0;
`
