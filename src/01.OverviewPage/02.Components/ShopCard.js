import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ShopTitle from '../01.UI-Elements/ShopTitle'
import ListItem from '../01.UI-Elements/ListItem'
import CheckedItemsSummary from '../01.UI-Elements/CheckedItemsSummary'

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
            <CheckedItemsSummary lengthCheckedIds={lengthCheckedIds} />
          )}
        </ShopCardStyled>
      }
    </>
  )
}

const ShopCardStyled = styled(NavLink)`
  border: var(--border);
  border-radius: 8px;
  padding: 15px;
  display: grid;
  gap: 5px;
  text-decoration: none;
`
