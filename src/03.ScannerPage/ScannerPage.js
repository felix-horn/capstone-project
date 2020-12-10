import { useState } from 'react'
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
  const [camera, setCamera] = useState(false)
  const [result, setResult] = useState(null)
  return (
    <>
      <HeaderStyled onClick={toggleMenu} />
      {isMenuVisible && <MenuWrapped toggleMenu={toggleMenu} />}
      <ShopTitleStlyed>TEST</ShopTitleStlyed>
      <ScannerWrapper>
        <p>{result ? result : 'Scanning...'}</p>
        <Container>{camera && <Scanner onDetected={onDetected} />}</Container>
        <button onClick={() => setCamera(!camera)}>
          {camera ? 'Stop' : 'Start'}
        </button>
      </ScannerWrapper>
    </>
  )
  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible)
  }
  function onDetected(result) {
    setResult(result)
  }
}

const HeaderStyled = styled(Header)`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
`
const ShopTitleStlyed = styled.h1`
  margin-top: 40px !important;
`
const ScannerWrapper = styled.div`
  text-align: center;
  height: 70vh;
  width: 70vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
`
const Container = styled.div`
  position: relative;

  #interactive.viewport canvas,
  video {
    width: 400px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
  }

  #interactive.viewport canvas.drawingBuffer,
  video.drawingBuffer {
    width: 400px;
    height: 300px;
  }
`
