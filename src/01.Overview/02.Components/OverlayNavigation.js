import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components/macro'
import ButtonLabeledCircle from '../01.UI-Elements/ButtonLabeledCircle'
import AddShopIcon from '@material-ui/icons/PostAdd'
import ScannerIcon from '@material-ui/icons/CropFree'

OverlayNavigation.propTypes = {
  onClick: PropTypes.func.isRequired,
  addShop: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default function OverlayNavigation({ onClick, addShop, className }) {
  const history = useHistory()
  const newShopId = uuid()

  return (
    <>
      <OpaqueBackground onClick={onClick} className={className} />
      <ButtonAddShop
        title="Neues Geschäft hinzufügen"
        onClick={handleAddShopClick}
        variant="small"
      >
        <AddShopIcon />
      </ButtonAddShop>
      <ButtonScanner
        title="Barcode scannen"
        onClick={handleScanBarcodeClick}
        variant="primary"
      >
        <ScannerIconAnimated />
      </ButtonScanner>
    </>
  )
  function handleAddShopClick() {
    history.push({
      pathname: '/shop',
      state: { shopId: newShopId },
    })
    addShop(newShopId)
  }
  function handleScanBarcodeClick() {
    history.push({
      pathname: '/scanner',
      state: { useCase: 'uncheckItem' },
    })
  }
}

const OpaqueBackground = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--white);
  opacity: 0.8;
`
const ButtonAddShop = styled(ButtonLabeledCircle)`
  position: absolute;
  z-index: var(--z-index-item-on-overlay);
  bottom: calc(120px + 10px + 5px);
  right: calc(30px + 10px + 5px);

  animation: 0.2s ease-in-out 0s 1 slideUp;

  @keyframes slideUp {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`
const ButtonScanner = styled(ButtonLabeledCircle)`
  position: absolute;
  z-index: var(--z-index-item-on-overlay);
  bottom: calc(60px + 10px);
  right: calc(30px + 10px);
`
const ScannerIconAnimated = styled(ScannerIcon)`
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
