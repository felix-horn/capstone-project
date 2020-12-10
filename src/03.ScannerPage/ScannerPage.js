import { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from '../00.SharedComponents/01.UI-Elements/02.Components/Header'
import MenuWrapped from '../00.SharedComponents/01.UI-Elements/02.Components/MenuWrapped'
import Scanner from './02.Components/Scanner'

ScannerPage.propTypes = {
  // database: PropTypes.object.isRequired,
  // changeShopTitle: PropTypes.func.isRequired,
  // visibilityUndoButton: PropTypes.string.isRequired,
}

export default function ScannerPage() {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [camera, setCamera] = useState(true)
  const [result, setResult] = useState('')

  // useEffect(() => {})

  console.log(result)

  return (
    <ScannerPageStyled>
      <HeaderStyled onClick={toggleMenu} />
      {isMenuVisible && <MenuWrapped toggleMenu={toggleMenu} />}
      <ExplanationStlyed>
        Um einen Artikel wieder auf die Einkaufsliste zu setzen, scanne dessen
        Barcode.
      </ExplanationStlyed>
      <div>{result ? '' : 'Scanning...'}</div>
      {camera ? (
        <ScannerWrapper>
          <div className={'container'}>
            {camera && <Scanner onDetected={onDetected} />}
          </div>
        </ScannerWrapper>
      ) : (
        <OutputWrapper>{result} wurde der Liste XY hinzugefügt.</OutputWrapper>
      )}
      <button onClick={scanAgain}>Weiteres Produkt scannen</button>
    </ScannerPageStyled>
  )

  function onDetected(result) {
    setResult(result)
    setCamera(false)
  }

  function scanAgain() {
    setCamera(true)
    setResult('')
  }

  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible)
  }
}

const OutputWrapper = styled.div`
  grid-row: 3;
  align-self: flex-start;
  margin: 0 auto;
  border-radius: 5px;
  border: var(--border);
  height: 60vw;
  width: calc(65vw * 640 / 480);
  /* background-color: gray; */
  display: grid;
  place-items: center;
`

const ScannerWrapper = styled.div`
  grid-row: 3;
  align-self: flex-start;

  .container {
    position: relative;
    display: grid;
    place-items: center;
  }

  .container,
  #interactive.viewport {
    height: 65vw;
    /* background-color: #3cba5466; green */

    #interactive.viewport canvas,
    video {
      height: 65vw;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      /* background-color: #de524666; red */
    }
  }
`

const HeaderStyled = styled(Header)`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
`
const ExplanationStlyed = styled.p`
  padding: 15px;
  grid-row: 1;
`
const ScannerPageStyled = styled.div`
  height: calc(100vh - 60px);
  display: grid;
  place-items: center;
  gap: 20px;
  grid-template-rows: 10% 5% auto 20%;
`
