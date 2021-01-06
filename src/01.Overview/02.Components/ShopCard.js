import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import ShopTitle from '../01.UI-Elements/ShopTitle'
import ListItem from '../01.UI-Elements/ListItem'
import CheckedItemsSummary from '../01.UI-Elements/CheckedItemsSummary'
import {
  getUncheckedItemIds,
  getQuantityCheckedItems,
  getShopTitle,
} from '../../services/filter.services'

ShopCard.propTypes = {
  shopId: PropTypes.string.isRequired,
  database: PropTypes.object.isRequired,
}

export default function ShopCard({ shopId, database }) {
  const history = useHistory()
  const uncheckedIds = getUncheckedItemIds(database, shopId)
  const lengthCheckedIds = getQuantityCheckedItems(database, shopId)
  const shopTitle = getShopTitle(database, shopId)

  return (
    <CardLayout onClick={navigateToShop} data-testid="shop-card">
      <ShopTitle title={shopTitle} />
      {uncheckedIds.map((id) => (
        <ListItem key={id} title={database.items.byId[id].title} />
      ))}
      {lengthCheckedIds > 0 && (
        <CheckedItemsSummary lengthCheckedIds={lengthCheckedIds} />
      )}
    </CardLayout>
  )
  function navigateToShop() {
    history.push({
      pathname: `/shop/${shopTitle}`,
      state: { shopId },
    })
  }
}

const CardLayout = styled.div`
  border: var(--border);
  border-radius: 8px;
  padding: 15px;
  display: grid;
  gap: 5px;
  text-decoration: none;
`
