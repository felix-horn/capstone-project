import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { useLocation, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'

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
                  pathname: `/ShopPage/${shopTitle}`,
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
  display: inline-block;
  width: 200px;
`
