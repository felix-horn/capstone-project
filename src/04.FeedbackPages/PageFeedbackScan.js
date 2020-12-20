import { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Quagga from 'quagga'
import Header from '../00.SharedComponents/01.UI-Elements/02.Components/Header'
import Explanation from '../00.SharedComponents/01.UI-Elements/02.Components/Explanation'
import FeedbackCard from './01.UI-Elements/FeedbackCard'
import Button from './01.UI-Elements/Button'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
import StorageIcon from '@material-ui/icons/Storage'

PageFeedbackScan.propTypes = {
  database: PropTypes.object.isRequired,
  changeBarcode: PropTypes.func.isRequired,
}

export default function PageFeedbackScan({ database, uncheckItemViaBarcode }) {
  const history = useHistory()
  const location = useLocation()
  const barcode = location.state.barcode
  const matchingItemIds = database.items.allIds.filter(
    (id) => database.items.byId[id]?.barcode === barcode
  )

  /* the same barcode can be allocated to more than one item - even in differen shops */
  const matchingItemTitles = matchingItemIds.map(
    (id) => database.items.byId[id]?.title
  )
  /* find shop names via item ids */
  const matchingShopIds = matchingItemIds.map(
    (itemId) =>
      database.shops.byId[
        database.shops.allIds.find((shopId) =>
          database.shops.byId[shopId].items.includes(itemId)
        )
      ].id
  )
  const matchingShopTitles = matchingShopIds.map(
    (id) => database.shops.byId[id].title
  )

  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(10)
    }
    Quagga.stop()
    if (matchingItemIds.length > 0) {
      uncheckItemViaBarcode(matchingItemIds)
      setFeedback('success')
    } else {
      setFeedback('failure')
    }
  }, [])

  const [age, setAge] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  // const classes = useStyles()

  return (
    <PageFeedbackScanStyled>
      <HeaderStyled />
      <Explanation useCase="uncheckItem" />
      <FeedbackCard
        feedback={feedback}
        barcode={barcode}
        matchingItemTitles={matchingItemTitles}
        matchingShopTitles={matchingShopTitles}
      />
      <ButtonPositioned
        title={
          feedback === 'success' ? 'Weiteren Code scannen' : 'Erneut scannen'
        }
        onClick={() => history.goBack()}
        className="primary"
      />
      {matchingShopIds.length === 1 && (
        <ButtonPositioned
          title={`Zur Liste "${matchingShopTitles[0]}"`}
          onClick={() =>
            history.push({
              pathname: `/ShopPage/${matchingShopTitles[0]}`,
              state: { shopId: matchingShopIds[0] },
            })
          }
        />
      )}

      <SelectWrapper variant="outlined">
        <InputLabel id="selectId">Zum Geschäft</InputLabel>
        <Select
          labelId="selectId"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Zum Geschäft"
        >
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
    </PageFeedbackScanStyled>
  )
}

const HeaderStyled = styled(Header)`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
`

const PageFeedbackScanStyled = styled.div`
  position: relative;
  margin-top: 35px;
  height: calc(100vh - 50px - 10px);
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  gap: 35px;
  place-items: center;
`

const ButtonPositioned = styled(Button)`
  z-index: 200;
  position: absolute;
  bottom: 160px;

  &.primary {
    bottom: 230px;
  }
`

const SelectWrapper = styled(FormControl)`
  display: inline-block;
  width: 200px;
  z-index: 200;
  /* position: relative; */
  /* bottom: 160px; */
  top: 190px;
  height: 30px;
`
