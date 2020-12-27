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
    //racecondition prevents camera crash on smartphone
    setTimeout(() => Quagga.stop())

    if (matchingItemIds.length > 0) {
      uncheckItemViaBarcode(matchingItemIds)
      setFeedback('success')
    } else {
      setFeedback('failure')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageGrid>
      <HeaderPositioned />
      <Explanation useCase="uncheckItem" />
      <FeedbackCard
        feedback={feedback}
        barcode={barcode}
        matchingItemTitles={matchingItemTitles}
        matchingShopTitles={matchingShopTitles}
      />
      <Button
        title={
          feedback === 'success' ? 'Weiteren Code scannen' : 'Erneut scannen'
        }
        onClick={() => history.goBack()}
        className="primary"
      >
        <ScanIcon />
      </Button>
      
        {matchingShopIds.length === 1 && (
          <Button
            title={`Zur Liste "${matchingShopTitles[0]}"`}
            onClick={() =>
              history.push({
                pathname: `/shop/${matchingShopTitles[0]}`,
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
    </PageGrid>
  )
}

const HeaderPositioned = styled(Header)`
  position: fixed;
  z-index: var(--z-index-header);
  top: 0;
  left: 0;
  width: 100%;
`

const PageGrid = styled.div`
  margin-top: 35px;
  display: grid;
  grid-template-rows: auto 40vh auto auto;
  gap: 25px;
  align-items: start;
  justify-items: center;
`