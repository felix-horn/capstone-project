import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from '../00.SharedComponents/01.UI-Elements/02.Components/Header'
import Explanation from './01.UI-Elements/Explanation'
import Status from './01.UI-Elements/Status'
import Scanner from './02.Components/Scanner'
import FeedbackCard from './01.UI-Elements/FeedbackCard'
import ButtonBack from './01.UI-Elements/ButtonBack'
import ButtonScanAgain from './01.UI-Elements/ButtonScanAgain'
import { ReactComponent as ScannerFrame } from '../Assets/ScannerFrame.svg'
import Quagga from 'quagga'

ScannerPage.propTypes = {
  database: PropTypes.object.isRequired,
  changeBarcode: PropTypes.func.isRequired,
}

export default function ScannerPage({
  database,
  changeBarcode,
  uncheckItemViaBarcode,
}) {
  const [isScanning, setisScanning] = useState(true)
  const [barcode, setBarcode] = useState('')
  const [itemIdsToBarcode, setItemIdsToBarcode] = useState(false)
  const [isBarcodeInDatabase, setIsBarcodeInDatabase] = useState(false)

  const location = useLocation()
  const useCase = location.state.useCase
  const itemId = location.state.itemId
  const shopId = location.state.shopId
  const itemTitle = database.items.byId[itemId]?.title

  useEffect(() => {
    if (!isScanning && window.navigator.vibrate) {
      window.navigator.vibrate(10)
    }
  }, [isScanning])

  /* useEffect(() => {
    Quagga.stop()
  }, [barcode]) */
  return (
    <ScannerPageStyled>
      <HeaderStyled shopId={shopId} />
      <Explanation useCase={useCase} />
      <Status useCase={useCase} itemTitle={itemTitle} isScanning={isScanning} />
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
          <FeedbackCard
            useCase={useCase}
            isBarcodeInDatabase={isBarcodeInDatabase}
            itemIdsToBarcode={itemIdsToBarcode}
            barcode={barcode}
            database={database}
          />
          <ButtonWrapperStyled className="primary">
            {useCase === 'setup' && <ButtonBack shopId={shopId} />}
            {useCase === 'uncheckItem' && (
              <ButtonScanAgain
                onClick={scanAgain}
                isBarcodeInDatabase={isBarcodeInDatabase}
              />
            )}
          </ButtonWrapperStyled>
          <ButtonWrapperStyled className="secondary">
            {useCase === 'setup' && <ButtonScanAgain onClick={scanAgain} />}
            {useCase === 'uncheckItem' && (
              <ButtonBack
                shopId={shopId}
                isBarcodeInDatabase={isBarcodeInDatabase}
              />
            )}
          </ButtonWrapperStyled>
        </>
      )}
    </ScannerPageStyled>
  )

  function onDetected(barcode) {
    setBarcode(barcode)
    setisScanning(false)
    if (useCase === 'setup') {
      changeBarcode(itemId, barcode)
    }
    const itemIdsToBarcode = database.items.allIds.filter(
      (id) => database.items.byId[id]?.barcode === barcode
    )
    if (useCase === 'uncheckItem' && itemIdsToBarcode.length > 0) {
      uncheckItemViaBarcode(itemIdsToBarcode)
      setItemIdsToBarcode(itemIdsToBarcode)
      setIsBarcodeInDatabase(true)
    } else {
      setIsBarcodeInDatabase(false)
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

const ButtonWrapperStyled = styled.div`
  z-index: 200;
  position: absolute;
  bottom: 200px;

  &.primary > * {
    box-shadow: var(--strong-box-shadow);
    background-color: var(--CTA-blue);
    color: var(--white) !important;
    padding: 10px 15px;
  }

  &.secondary > * {
    position: absolute;
    top: 40px;
    transform: translate(-50%, -50%);
    border: var(--border);
    background-color: var(--white) !important;
    padding: 5px 15px;
    color: var(--dark-gray) !important;
  }
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
