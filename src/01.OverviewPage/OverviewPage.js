import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ShopCard from './02.Components/ShopCard'
import ButtonAction from './01.UI-Elements/ButtonAction'
import ActionButtonOverlay from './02.Components/ActionButtonOverlay'

OverviewPage.propTypes = {
  database: PropTypes.object.isRequired,
  addShop: PropTypes.func.isRequired,
}

export default function OverviewPage({ database, addShop }) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  const [buttonActionClass, setButtonActionClass] = useState('')
  return (
    <OverviewPageStyled>
      {isOverlayVisible && (
        <ActionButtonOverlayStyled
          onClick={handleOverlayClick}
          addShop={addShop}
        />
      )}
      {database.shops.allIds.map((shopId) => (
        <ShopCard key={shopId} shopId={shopId} database={database} />
      ))}
      <ButtonActionStyled
        onClick={handleButtonActionClick}
        className={buttonActionClass}
      />
    </OverviewPageStyled>
  )

  function handleOverlayClick() {
    setIsOverlayVisible(false)
    setButtonActionClass('rotate')
  }

  function handleButtonActionClick() {
    setIsOverlayVisible(true)
    setButtonActionClass('')
  }
}

const OverviewPageStyled = styled.div`
  position: relative;
  height: calc(100vh - 60px);
  display: grid;
  gap: 10px;
  grid-auto-rows: minmax(min-content, max-content);
`
const ActionButtonOverlayStyled = styled(ActionButtonOverlay)`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
`
const ButtonActionStyled = styled(ButtonAction)`
  position: absolute;
  bottom: 60px;
  right: 30px;
  z-index: 100;

  //how could this be included in the component itself?

  &.rotate {
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
