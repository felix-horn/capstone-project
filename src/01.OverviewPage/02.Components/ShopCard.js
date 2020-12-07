import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ShopTitle from '../01.UI-Elements/ShopTitle'
import ListItem from '../01.UI-Elements/ListItem'

ShopCard.propTypes = {
  shopId: PropTypes.string.isRequired,
  database: PropTypes.object.isRequired,
}

export default function ShopCard({ shopId, database }) {
  const uncheckedIds = database.shops.byId[shopId].items.filter(
    (id) => !database.items.byId[id].isChecked
  )

  const lengthCheckedIds =
    database.shops.byId[shopId].items.length - uncheckedIds.length

  return (
    <>
      {
        <ShopCardStyled
          exact
          to={{
            pathname: '/ShopPage',
            state: { shopId },
          }}
        >
          <ShopTitle title={database.shops.byId[shopId].title} />
          {uncheckedIds.map((id) => (
            <ListItem key={id} title={database.items.byId[id].title} />
          ))}
          {lengthCheckedIds > 0 && (
            <CheckedItemsSummary>{generateSummary()}</CheckedItemsSummary>
          )}
        </ShopCardStyled>
      }
    </>
  )

  function generateSummary() {
    // eslint-disable-next-line default-case
    switch (true) {
      case lengthCheckedIds === 0:
        return ''
      case lengthCheckedIds === 1:
        return 'und 1 abgehakter Eintrag'
      case lengthCheckedIds > 1:
        return `und ${lengthCheckedIds} abgehakte Einträge`
    }
  }
}

const ShopCardStyled = styled(NavLink)`
  border: var(--border);
  border-radius: 8px;
  padding: 15px;
  display: grid;
  gap: 5px;
  text-decoration: none;
`
const CheckedItemsSummary = styled.p`
  margin: 4px 2px 0 !important;
  padding: 0;
  font-size: 0.8rem;
  color: var(--light-gray);
`
