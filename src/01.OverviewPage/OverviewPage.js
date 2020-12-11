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
  return (
    <OverviewPageStyled>
      {isOverlayVisible && (
        <ActionButtonOverlayStyled onClick={() => setIsOverlayVisible(false)} />
      )}
      {database.shops.allIds.map((shopId) => (
        <ShopCard key={shopId} shopId={shopId} database={database} />
      ))}
      <ButtonActionStyled onClick={() => setIsOverlayVisible(true)} />
    </OverviewPageStyled>
  )
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
`
