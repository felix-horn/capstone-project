import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ShopCard from './02.Components/ShopCard'
import ActionButton from './01.UI-Elements/ActionButton'
import ScannerButton from './01.UI-Elements/ScannerButton'

OverviewPage.propTypes = {
  database: PropTypes.object.isRequired,
  addShop: PropTypes.func.isRequired,
}

export default function OverviewPage({ database, addShop }) {
  return (
    <OverviewPageStyled>
      {database.shops.allIds.map((shopId) => (
        <ShopCard key={shopId} shopId={shopId} database={database} />
      ))}
      <ActionButtonStyled addShop={addShop} />
      <ScannerButtonStyled />
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

const ActionButtonStyled = styled(ActionButton)`
  position: absolute;
  bottom: 60px;
  right: 30px;
  z-index: 100;
`
const ScannerButtonStyled = styled(ScannerButton)`
  position: absolute;
  bottom: 120px;
  right: 30px;
  z-index: 100;
`
