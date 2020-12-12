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

ScannerPage.propTypes = {
  database: PropTypes.object.isRequired,
  changeBarcode: PropTypes.func.isRequired,
}

export default function ScannerPage({ database, changeBarcode }) {
  const [camera, setCamera] = useState(true)
  const [barcode, setBarcode] = useState('')

  const location = useLocation()
  const itemId = location.state.itemId
  const shopId = location.state.shopId
  const selectedItemTitle = database.items.byId[itemId].title

  return (
    <ScannerPageStyled>
      <HeaderStyled shopId={shopId} />
      <Explanation />
      <ScanningStatusStyled>{barcode ? '' : 'Scanne:'}</ScanningStatusStyled>
      <SelectedItemTitleStyled>{selectedItemTitle}</SelectedItemTitleStyled>
      {camera ? (
        <ScannerWrapper>
          <div className={'container'}>
            {camera && <Scanner onDetected={onDetected} />}
            <ScannerFrameStyled />
          </div>
        </ScannerWrapper>
      ) : (
        <ConfirmationCard barcode={barcode} />
      )}
      <ButtonSaveStyled shopId={shopId} />
      <ButtonScanAgainStyled onClick={scanAgain} />
    </ScannerPageStyled>
  )

  function onDetected(barcode) {
    setBarcode(barcode)
    setCamera(false)
    changeBarcode(itemId, barcode)
  }

  function scanAgain() {
    setCamera(true)
    setBarcode('')
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
  height: calc(100vh - 60px);
  display: grid;
  place-items: center;
  grid-template-rows: 15% auto 20%;
`

const ScanningStatusStyled = styled.div`
  position: absolute;
  z-index: 200;
  top: 110px;
`

const SelectedItemTitleStyled = styled.h2`
  position: absolute;
  z-index: 200;
  top: 140px;
`

const ButtonSaveStyled = styled(ButtonSave)`
  position: absolute;
  z-index: 200;
  bottom: 120px;
`
const ButtonScanAgainStyled = styled(ButtonScanAgain)`
  position: absolute;
  z-index: 200;
  bottom: 60px;
`

const ScannerWrapper = styled.div`
  grid-row: 2;
  align-self: center;

  .container {
    position: relative;
    display: grid;
    place-items: center;
    height: calc(85vw * 480 / 640);
  }

  .container,
  #interactive.viewport {
    width: 85vw;
    /* background-color: #3cba5466; green */

    #interactive.viewport canvas,
    video {
      width: 85vw;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      /* background-color: #de524666; red */
    }
  }
`
const ScannerFrameStyled = styled(ScannerFrame)`
  height: 65vw;
  position: absolute;
  z-index: 100;
`
