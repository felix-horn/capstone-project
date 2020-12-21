import { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Quagga from 'quagga'
import Header from '../00.SharedComponents/01.UI-Elements/02.Components/Header'
import Explanation from '../00.SharedComponents/01.UI-Elements/02.Components/Explanation'
import FeedbackCard from './01.UI-Elements/FeedbackCard'
import Button from './01.UI-Elements/Button'
import StoreSelect from './01.UI-Elements/StoreSelect'
import ListIcon from '@material-ui/icons/List'
import ScanIcon from '@material-ui/icons/CropFree'

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

  const allShopIds = database.shops.allIds
  const allShopTitles = allShopIds.map((id) => database.shops.byId[id].title)

  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(10)
    }
    //setTimeout prevents camera crash on smartphone
    setTimeout(() => Quagga.stop())

    if (matchingItemIds.length > 0) {
      uncheckItemViaBarcode(matchingItemIds)
      setFeedback('success')
    } else {
      setFeedback('failure')
    }
  }, [])

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
      >
        <ScanIcon />
      </ButtonPositioned>
      <SecondaryPositoned>
        {matchingShopIds.length === 1 && (
          <Button
            title={`Zur Liste "${matchingShopTitles[0]}"`}
            onClick={() =>
              history.push({
                pathname: `/ShopPage/${matchingShopTitles[0]}`,
                state: { shopId: matchingShopIds[0] },
              })
            }
          >
            <ListIcon />
          </Button>
        )}

        {matchingShopIds.length > 1 && (
          <StoreSelect
            matchingShopIds={matchingShopIds}
            matchingShopTitles={matchingShopTitles}
          />
        )}

        {matchingShopIds.length === 0 && (
          <StoreSelect
            matchingShopIds={allShopIds}
            matchingShopTitles={allShopTitles}
          />
        )}
      </SecondaryPositoned>
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
  bottom: 230px;
`

const SecondaryPositoned = styled.div`
  z-index: 200;
  position: absolute;
  bottom: 160px;
`
