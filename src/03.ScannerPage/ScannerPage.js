import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

// import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from '../00.SharedComponents/01.UI-Elements/02.Components/Header'
import MenuWrapped from '../00.SharedComponents/01.UI-Elements/02.Components/MenuWrapped'
import Scanner from './02.Components/Scanner'

import CropFreeIcon from '@material-ui/icons/CropFree'
import SaveIcon from '@material-ui/icons/Save'

ScannerPage.propTypes = {
  // database: PropTypes.object.isRequired,
  // changeShopTitle: PropTypes.func.isRequired,
  // visibilityUndoButton: PropTypes.string.isRequired,
}

export default function ScannerPage({ database, changeBarcode }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [camera, setCamera] = useState(true)
  const [barcode, setBarcode] = useState('')

  const location = useLocation()
  const itemId = location.state.itemId
  const shopId = location.state.shopId
  const selectedItemTitle = database.items.byId[itemId].title

  console.log(barcode)
  console.log(selectedItemTitle)

  return (
    <ScannerPageStyled>
      <HeaderStyled onClick={toggleMenu} />
      {isMenuVisible && <MenuWrapped toggleMenu={toggleMenu} />}
      <ExplanationStlyed>
        Scanne den Barcode des Artikels {selectedItemTitle} ein, um diesen
        zukünftig über die Scanner-Funktion der App auf dessen Liste zu setzen.
      </ExplanationStlyed>
      <ScanningStatusStyled>{barcode ? '' : 'Scant...'}</ScanningStatusStyled>
      <SelectedItemTitleStyled>{selectedItemTitle}</SelectedItemTitleStyled>
      {camera ? (
        <ScannerWrapper>
          <div className={'container'}>
            {camera && <Scanner onDetected={onDetected} />}
          </div>
        </ScannerWrapper>
      ) : (
        <OutputWrapper>
          <span>
            Der Artikel {selectedItemTitle} wurde mit dem Barcode verknüpft.
          </span>
          Bitte überprüfe, ob die Nummer auf dem Barcode mit dieser
          übereinstimmt:
          <strong>{barcode}</strong>
        </OutputWrapper>
      )}
      <PrimaryButtonStyled
        to={{
          pathname: '/ShopPage',
          state: { shopId },
        }}
      >
        <SaveIcon />
        Speichern
      </PrimaryButtonStyled>
      <SecondaryButtonStyled onClick={scanAgain}>
        <CropFreeIcon />
        Erneut scannen
      </SecondaryButtonStyled>
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

  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible)
  }
}

const OutputWrapper = styled.div`
  grid-row: 4;
  align-self: flex-start;
  margin: 0 auto;
  border-radius: 5px;
  border: var(--border);
  height: 60vw;
  width: calc(65vw * 640 / 480);
  background-color: var(--confirmation-green);
  padding: 30px;
  display: grid;
  place-items: center;
`

const ScannerWrapper = styled.div`
  grid-row: 4;
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

const ScannerPageStyled = styled.div`
  height: calc(100vh - 60px);
  display: grid;
  place-items: center;
  //gap: 20px;
  grid-template-rows: 10% 5% 5% auto 5% 15%;
`

const ExplanationStlyed = styled.p`
  grid-row: 1;
  padding: 15px;
  font-size: 0.8rem;
`

const ScanningStatusStyled = styled.div`
  grid-row: 2;
`

const SelectedItemTitleStyled = styled.h2`
  grid-row: 3;
  margin-bottom: 15px !important;
`

const PrimaryButtonStyled = styled(NavLink)`
  grid-row: 5;
  box-shadow: var(--light-box-shadow);
  border-radius: 5px;
  border: none;
  background-color: var(--CTA-blue);
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--white) !important;
  text-decoration: none;
`
const SecondaryButtonStyled = styled.button`
  grid-row: 6;
  border-radius: 5px;
  border: var(--border);
  outline: none;
  background-color: var(--white);
  padding: 5px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--dark-gray) !important;
`
