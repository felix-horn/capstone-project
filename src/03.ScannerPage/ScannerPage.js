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

  return (
    <>
      <HeaderStyled onClick={toggleMenu} />
      {isMenuVisible && <MenuWrapped toggleMenu={toggleMenu} />}
      <ExplanationStlyed>
        Um einen Artikel wieder auf die Einkaufsliste zu setzen, scanne dessen
        Barcode.
      </ExplanationStlyed>
      <p>{result ? result : 'Scanning...'}</p>
      {camera ? (
        <ScannerWrapper>
          <div className={'container'}>
            {camera && <Scanner onDetected={onDetected} />}
          </div>
        </ScannerWrapper>
      ) : (
        <OutputWrapper>{result} wurde der Liste XY hinzugefügt.</OutputWrapper>
      )}
      <OutputWrapper>{result} wurde der Liste XY hinzugefügt.</OutputWrapper>
      <button onClick={scanAgain}>Weiteres Produkt scannen</button>
    </>
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
  display: grid;
  place-items: center;
  width: 60vw;
  height: 60vw;
  /* height: 480px; */
  background-color: gray;
`

const ScannerWrapper = styled.div`
  .container {
    position: relative;
    display: grid;
    place-items: center;
  }

  .container,
  #interactive.viewport {
    height: 65vw;
    background-color: #3cba5466; /* green */

    #interactive.viewport canvas,
    video {
      height: 65vw;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #de524666; /* red */
      border-radius: 5px;
    }

    /* #interactive.viewport canvas.drawingBuffer,
    video.drawingBuffer {
      height: 60vw;
      background-color: #3cba5466; /* green 
    } */
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
`
