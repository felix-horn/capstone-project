import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ButtonAddShop from '../01.UI-Elements/ButtonAddShop'
import ButtonScanner from '../01.UI-Elements/ButtonScanner'

ActionButtonOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
  deleteShop: PropTypes.func.isRequired,
}

export default function ActionButtonOverlay({
  onClick,
  deleteShop,
  className,
}) {
  return (
    <ClickableOverlayBackground onClick={onClick} className={className}>
      <BackgroundStyled />
      <ButtonAddShopStyled /* addShop={addShop} */ />
      <ButtonScannerStyled />
    </ClickableOverlayBackground>
  )
}

const ClickableOverlayBackground = styled.div`
  height: 100%;
  width: 100%;
`
const BackgroundStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--white);
  /* background-color: green; */
  opacity: 0.8;
`

const ButtonAddShopStyled = styled(ButtonAddShop)`
  position: absolute;
  bottom: calc(120px + 10px + 5px);
  right: calc(30px + 10px + 5px);
  z-index: 300;
`
const ButtonScannerStyled = styled(ButtonScanner)`
  position: absolute;
  z-index: 300;
  bottom: calc(60px + 10px);
  right: calc(30px + 10px);
`
