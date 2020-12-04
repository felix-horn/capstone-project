import { NavLink } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ShopCard from './02.Components/ShopCard'
import ActionButton from './01.UI-Elements/ActionButton'

OverviewPage.propTypes = {
  database: PropTypes.object.isRequired,
}

export default function OverviewPage({ database, addShop }) {
  const newShopId = uuid()
  return (
    <OverviewPageStyled>
      {database.shops.allIds.map((shopId) => (
        <ShopCard key={shopId} shopId={shopId} database={database} />
      ))}

      <ButtonWrapper
        exact
        to={{
          pathname: '/ShopPage',
          state: { shopId: newShopId },
        }}
        onClick={handleClick}
      >
        <ActionButton />
      </ButtonWrapper>
    </OverviewPageStyled>
  )

  function handleClick() {
    addShop(newShopId)
  }
}

const OverviewPageStyled = styled.div`
  position: relative;
  height: calc(100vh - 60px);
`

const ButtonWrapper = styled(NavLink)`
  position: absolute;
  bottom: 250px;
  right: 20px;
  z-index: 10;
  display: grid;
  place-items: center;
  height: 70px;
  width: 70px;
`
// <p>{database.shops.byId[shopID].title}</p>
