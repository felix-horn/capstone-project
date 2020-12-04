import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ShopCard from './02.Components/ShopCard'
import ActionButton from './01.UI-Elements/ActionButton'

OverviewPage.propTypes = {
  database: PropTypes.object.isRequired,
}

export default function OverviewPage({ database }) {
  return (
    <OverviewPageStyled>
      {database.shops.allIds.map((shopID) => (
        <p>{database.shops.byId[shopID].title}</p>
      ))}
      <ShopCard database={database} />
      <ButtonWrapper>
        <ActionButton href="/ShopCard" />
      </ButtonWrapper>
    </OverviewPageStyled>
  )
}

const OverviewPageStyled = styled.div`
  position: relative;
  height: calc(100vh - 60px);
`

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 250px;
  right: 20px;
  z-index: 10;
  display: grid;
  place-items: center;
  height: 70px;
  width: 70px;
`
