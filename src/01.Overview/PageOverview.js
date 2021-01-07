import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import ShopCard from './02.Components/ShopCard'
import OverlayNavigation from './02.Components/OverlayNavigation'
import ButtonCircle from './01.UI-Elements/ButtonCircle'
import MenuIcon from '@material-ui/icons/Menu'

OverviewPage.propTypes = {
  database: PropTypes.object.isRequired,
  addShop: PropTypes.func.isRequired,
}

export default function OverviewPage({ database, addShop }) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  const [buttonNavigationClass, setButtonNavigationClass] = useState('')
  const allShopIds = database.shops.allIds
  return (
    <PageLayout>
      {isOverlayVisible && (
        <OverlayNavigationPositioned
          onClick={handleOverlayClick}
          addShop={addShop}
        />
      )}
      {allShopIds.map((shopId) => (
        <ShopCard key={shopId} shopId={shopId} database={database} />
      ))}
      <ButtonNavigation
        onClick={handleButtonNavigationClick}
        className={buttonNavigationClass}
      >
        <MenuIconAnimated className={buttonNavigationClass} />
      </ButtonNavigation>
    </PageLayout>
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

const PageLayout = styled.div`
  height: calc(100vh - 50px - 50px); // 50px top and bottom
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
const ButtonNavigation = styled(ButtonCircle)`
  position: fixed;
  z-index: var(--z-index-floating-item);
  bottom: 70px;
  right: 40px;
`
const MenuIconAnimated = styled(MenuIcon)`
  &.rotate-back {
    animation: 0.2s rotateBack ease-in-out;

    @keyframes rotateBack {
      0% {
        transform: rotate(90deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`
