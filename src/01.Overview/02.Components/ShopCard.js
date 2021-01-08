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
  getItemTitle,
} from '../../services/database.services'

ShopCard.propTypes = {
  shopId: PropTypes.string.isRequired,
  database: PropTypes.object.isRequired,
}

export default function ShopCard({ shopId, database }) {
  const history = useHistory()
  const uncheckedIds = getUncheckedItemIds(database, shopId)
  const quantityCheckedIds = getQuantityCheckedItems(database, shopId)
  const shopTitle = getShopTitle(database, shopId)

  return (
    <CardLayout onClick={navigateToShop} data-testid="shop-card">
      <ShopTitlePositioned title={shopTitle} />
      {uncheckedIds.map((id) => (
        <ListItem key={id} title={getItemTitle(database, id)} />
      ))}
      {quantityCheckedIds > 0 && (
        <CheckedItemsSummary quantityCheckedIds={quantityCheckedIds} />
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
`
const ShopTitlePositioned = styled(ShopTitle)`
  margin-bottom: 8px;
`
