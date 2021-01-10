import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

StoreSelect.propTypes = {
  shopIdsToMatchingItems: PropTypes.array.isRequired,
  shopTitlesToMatchingItems: PropTypes.array.isRequired,
  className: PropTypes.string,
}

export default function StoreSelect({
  shopIdsToMatchingItems,
  shopTitlesToMatchingItems,
  className,
}) {
  const history = useHistory()

  return (
    <SelectWrapper variant="outlined" className={className}>
      <InputLabel id="selectId">Zum Geschäft</InputLabel>
      <Select labelId="selectId" value="" label="Zum Geschäft">
        {shopIdsToMatchingItems.map((shopId, index) => {
          const shopTitle = shopTitlesToMatchingItems[index]
          return (
            <MenuItem
              key={shopId}
              onClick={() => navigateToShop(shopTitle, shopId)}
            >
              {shopTitle}
            </MenuItem>
          )
        })}
      </Select>
    </SelectWrapper>
  )
  function navigateToShop(shopTitle, shopId) {
    history.replace({
      pathname: `/shop/${shopTitle}`,
      state: { shopId },
    })
  }
}

const SelectWrapper = styled(FormControl)`
  width: 160px;
`
