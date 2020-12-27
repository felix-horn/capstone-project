import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
StoreSelect.propTypes = {
  matchingShopIds: PropTypes.array.isRequired,
  matchingShopTitles: PropTypes.array.isRequired,
  className: PropTypes.string,
}

export default function StoreSelect({
  matchingShopIds,
  matchingShopTitles,
  className,
}) {
  const history = useHistory()

  return (
    <SelectWrapper variant="outlined" className={className}>
      <InputLabel id="selectId">Zum Geschäft</InputLabel>
      <Select labelId="selectId" value="" label="Zum Geschäft">
        {matchingShopIds.map((shopId, index) => {
          const shopTitle = matchingShopTitles[index]
          return (
            <MenuItem
              onClick={() =>
                history.push({
                  pathname: `/shop/${shopTitle}`,
                  state: { shopId },
                })
              }
            >
              {shopTitle}
            </MenuItem>
          )
        })}
      </Select>
    </SelectWrapper>
  )
}

const SelectWrapper = styled(FormControl)`
  width: 160px;
`
