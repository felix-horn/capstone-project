import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from '../00.SharedComponents/01.UI-Elements/02.Components/Header'
import Scanner from './02.Components/Scanner'
import Explanation from './01.UI-Elements/Explanation'
import ButtonSave from './01.UI-Elements/ButtonSave'
import ButtonScanAgain from './01.UI-Elements/ButtonScanAgain'
import { ReactComponent as ScannerFrame } from '../Assets/ScannerFrame.svg'
import ConfirmationCard from './01.UI-Elements/ConfirmationCard'
import ItemTitle from './01.UI-Elements/ItemTitle'

ScannerPage.propTypes = {
  database: PropTypes.object.isRequired,
  changeBarcode: PropTypes.func.isRequired,
}

export default function ScannerPage({ database, changeBarcode }) {
  const [isScanning, setisScanning] = useState(true)
  const [barcode, setBarcode] = useState('')

  const location = useLocation()
  const itemId = location.state.itemId
  const shopId = location.state.shopId
  const itemTitle = database.items.byId[itemId].title

  return (
    <ScannerPageStyled>
      <HeaderStyled shopId={shopId} />
      <Explanation />
      <ItemTitle itemTitle={itemTitle} isScanning={isScanning} />
      {isScanning && (
        <ScannerWrapper>
          <div className={'container'}>
            <Scanner onDetected={onDetected} />
            <ScannerFrameStyled />
          </div>
        </ScannerWrapper>
      )}
      {!isScanning && (
        <>
          <ConfirmationCard barcode={barcode} />
          <ButtonSaveStyled shopId={shopId} />
          <ButtonScanAgainStyled onClick={scanAgain} />
        </>
      )}
    </ScannerPageStyled>
  )

  function onDetected(barcode) {
    setBarcode(barcode)
    setisScanning(false)
    changeBarcode(itemId, barcode)
    if (window.navigator.vibrate) {
      window.navigator.vibrate(10)
    }
  }

  function scanAgain() {
    setBarcode('')
    setisScanning(true)
  }
}

const HeaderStyled = styled(Header)`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
`

const ScannerPageStyled = styled.div`
  position: relative;
  margin-top: 35px;
  height: calc(100vh - 50px - 10px);
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  gap: 35px;
  place-items: center;
`

const ButtonSaveStyled = styled(ButtonSave)`
  position: absolute;
  z-index: 200;
  bottom: 160px;
`
const ButtonScanAgainStyled = styled(ButtonScanAgain)`
  position: absolute;
  z-index: 200;
  bottom: 100px;
`

const ScannerWrapper = styled.div`
  .container {
    position: absolute;
    display: grid;
    place-items: center;
    transform: translate(-50%, -50%);
    bottom: 40vh;
  }

  .container,
  #interactive.viewport {
    width: 85vw;

    #interactive.viewport canvas,
    video {
      position: absolute;
      width: 85vw;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      border-radius: 5px;
    }
  }
`
const ScannerFrameStyled = styled(ScannerFrame)`
  height: 65vw;
  position: absolute;
  z-index: 100;
`
