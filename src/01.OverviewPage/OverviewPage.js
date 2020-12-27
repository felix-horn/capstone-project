import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
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
  const history = useHistory()
  useEffect(() => {
    history.replace('/')
  }, [])
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

  function handleButtonActionClick() {
    setIsOverlayVisible(true)
    setButtonActionClass('')
  }

  function handleOverlayClick() {
    setIsOverlayVisible(false)
    setButtonActionClass('rotate')
  }
}

const OverviewPageStyled = styled.div`
  position: relative;
  height: calc(100vh - 50px - 10px);
  display: grid;
  gap: 10px;
  grid-auto-rows: minmax(min-content, max-content);
`
const ActionButtonOverlayStyled = styled(ActionButtonOverlay)`
  position: fixed;
  z-index: var(--z-index-overlay);
  top: 0;
  left: 0;
`
const ButtonActionStyled = styled(ButtonAction)`
  position: absolute;
  bottom: 60px;
  right: 30px;
  z-index: var(--z-index-floating-item);
`
