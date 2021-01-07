import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Menu from './Menu'

OverlayMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  deleteShop: PropTypes.func.isRequired,
}

export default function OverlayMenu({ toggleMenu, deleteShop }) {
  return (
    <ClickableMenuBackground onClick={toggleMenu} data-testid="background">
      <MenuPositioned deleteShop={deleteShop} />
    </ClickableMenuBackground>
  )
}

const ClickableMenuBackground = styled.div`
  position: absolute;
  z-index: var(--z-index-overlay);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const MenuPositioned = styled(Menu)`
  position: absolute;
  z-index: var(--z-index-item-on-overlay);
  top: 45px;
  right: 0;
`
