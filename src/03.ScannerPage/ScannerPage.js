import { useState, useEffect } from 'react'
import { useLocation, Redirect, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Quagga from 'quagga'
import Header from '../00.SharedComponents/01.UI-Elements/02.Components/Header'
import Explanation from '../00.SharedComponents/01.UI-Elements/02.Components/Explanation'
import Status from './02.UI-Elements/Status'
import Scanner from './03.Components/Scanner'
import { ReactComponent as ScannerFrame } from './01.Assets/ScannerFrame.svg'

export default function ScannerPage() {
  const [barcode, setBarcode] = useState('')
  const location = useLocation()
  const history = useHistory()

  //entering via app shortcut (manifest.json)
  const useCase = !location.state ? 'uncheckItem' : location.state.useCase

  const itemId = location.state?.itemId
  const shopId = location.state?.shopId
  const itemTitle = location.state?.title

  const pathname = useCase === 'setup' ? '/feedback-setup' : '/feedback-scan'
  useEffect(() => {
    if (barcode !== '') {
      history.push({
        pathname,
        state: { itemId, shopId, barcode },
      })
    }
    Quagga.stop()
  }, [barcode])

  return (
    <ScannerPageStyled>
      <HeaderStyled shopId={shopId} />
      <Explanation useCase={useCase} />
      <Status useCase={useCase} itemTitle={itemTitle} />
      <ScannerWrapper>
        <div className={'container'}>
          <Scanner onDetected={onDetected} />
          <ScannerFrameStyled />
        </div>
      </ScannerWrapper>
    </ScannerPageStyled>
  )

  function onDetected(barcode) {
    setBarcode(barcode)
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
