import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ShopCard from './02.Components/ShopCard'
import ButtonNavigation from './01.UI-Elements/ButtonNavigation'
import OverlayNavigation from './02.Components/OverlayNavigation'

OverviewPage.propTypes = {
  database: PropTypes.object.isRequired,
  addShop: PropTypes.func.isRequired,
}

export default function OverviewPage({ database, addShop }) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  const [buttonNavigationClass, setButtonNavigationClass] = useState('')
  return (
    <PageGrid>
      {isOverlayVisible && (
        <OverlayNavigationPositioned
          onClick={handleOverlayClick}
          addShop={addShop}
        />
      )}
      {database.shops.allIds.map((shopId) => (
        <ShopCard key={shopId} shopId={shopId} database={database} />
      ))}
      <ButtonNavigationPositioned
        onClick={handleButtonNavigationClick}
        className={buttonNavigationClass}
      />
    </PageGrid>
  )

  function handleButtonNavigationClick() {
    setIsOverlayVisible(true)
    setButtonNavigationClass('')
  }

  function handleOverlayClick() {
    setIsOverlayVisible(false)
    setButtonNavigationClass('rotate-back')
  }
}

const PageGrid = styled.div`
  position: relative;
  height: calc(100vh - 50px - 10px); // 50px top and 10px bottom
  display: grid;
  gap: 10px;
  grid-auto-rows: minmax(min-content, max-content);
`
const OverlayNavigationPositioned = styled(OverlayNavigation)`
  position: fixed;
  z-index: var(--z-index-overlay);
  top: 0;
  left: 0;
`
const ButtonNavigationPositioned = styled(ButtonNavigation)`
  position: absolute;
  bottom: 60px;
  right: 30px;
  z-index: var(--z-index-floating-item);
`
