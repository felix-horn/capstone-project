import { useState } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from '../00.SharedComponents/01.UI-Elements/02.Components/Header'
import MenuWrapped from '../00.SharedComponents/01.UI-Elements/02.Components/MenuWrapped'

ScannerPage.propTypes = {
  // database: PropTypes.object.isRequired,
  // changeShopTitle: PropTypes.func.isRequired,
  // visibilityUndoButton: PropTypes.string.isRequired,
}

export default function ScannerPage() {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  return (
    <>
      <HeaderStyled onClick={toggleMenu} />
      {isMenuVisible && <MenuWrapped toggleMenu={toggleMenu} />}
      <ShopTitleStlyed>TEST</ShopTitleStlyed>
    </>
  )
  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible)
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
