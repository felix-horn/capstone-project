import { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Quagga from 'quagga'
import ListIcon from '@material-ui/icons/List'
import ScanIcon from '@material-ui/icons/CropFree'

import Header from '../00.SharedComponents/01.UI-Elements/02.Components/Header'
import Explanation from '../00.SharedComponents/01.UI-Elements/02.Components/Explanation'
import FeedbackCard from './01.UI-Elements/FeedbackCard'
import ButtonRectangle from './01.UI-Elements/ButtonRectangle'
import StoreSelect from './01.UI-Elements/StoreSelect'
import {
  getAllShopIds,
  getAllShopTitles,
  getItemIdsByBarcode,
  getItemTitles,
  getShopIdsByItemIds,
} from '../services/database.services'

PageFeedbackScan.propTypes = {
  database: PropTypes.object.isRequired,
  uncheckItemViaBarcode: PropTypes.func.isRequired,
}

export default function PageFeedbackScan({ database, uncheckItemViaBarcode }) {
  const barcode = useLocation().state.barcode
  const history = useHistory()

  /* the same barcode can be allocated to more than one item - even in differen shops */
  const itemIdsMatchingBarcode = getItemIdsByBarcode(database, barcode)
  const itemTitlesMatchingBarcode = getItemTitles(
    database,
    itemIdsMatchingBarcode
  )
  const shopIdsToMatchingItems = getShopIdsByItemIds(
    database,
    itemIdsMatchingBarcode
  )
  const shopTitlesToMatchingItems = shopIdsToMatchingItems.map(
    (id) => database.shops.byId[id].title
  )
  const allShopIds = getAllShopIds(database)
  const allShopTitles = getAllShopTitles(database)

  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(10)
    }
    //racecondition prevents camera crash on smartphone
    setTimeout(() => Quagga.stop())

    if (itemIdsMatchingBarcode.length > 0) {
      uncheckItemViaBarcode(itemIdsMatchingBarcode)
      setFeedback('success')
    } else {
      setFeedback('failure')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageLayout>
      <HeaderPositioned />
      <Explanation useCase="uncheckItem" />
      {feedback === 'success' && (
        <FeedbackCard
          className="green"
          header={itemTitlesMatchingBarcode.join(' / ')}
          text={`wurde ${shopTitlesToMatchingItems.join(' / ')} hinzugefügt.`}
        />
      )}
      {feedback === 'failure' && (
        <FeedbackCard
          className="red"
          header={barcode}
          text="Keinem Deiner Produkte ist dieser Barcode zugeordnet."
        />
      )}
      <ButtonRectangle
        title={
          feedback === 'success' ? 'Weiteren Code scannen' : 'Erneut scannen'
        }
        onClick={navigateBackToScanner}
        className="primary"
      >
        <ScanIcon />
      </ButtonRectangle>

      {
        /* in the case of one match,
        the user has the option to navigate to the corresponding shop
        via a button */
        shopIdsToMatchingItems.length === 1 && (
          <ButtonRectangle
            title={`Zur Liste "${shopTitlesToMatchingItems[0]}"`}
            onClick={navigateToShop}
          >
            <ListIcon />
          </ButtonRectangle>
        )
      }

      {
        /* in the case of more than one match,
        the user has the option to navigate to any of the corresponding shops
        via a dropdown select */
        shopIdsToMatchingItems.length > 1 && (
          <StoreSelect
            shopIdsToMatchingItems={shopIdsToMatchingItems}
            shopTitlesToMatchingItems={shopTitlesToMatchingItems}
          />
        )
      }

      {
        /* in the case of no match,
        the user has the option to navigate to any shop
        (via a dropdown select)
        in order to start the setup process from there*/
        shopIdsToMatchingItems.length === 0 && (
          <StoreSelect
            shopIdsToMatchingItems={allShopIds}
            shopTitlesToMatchingItems={allShopTitles}
          />
        )
      }
    </PageLayout>
  )
  function navigateBackToScanner() {
    history.replace({
      pathname: '/scanner',
      state: { useCase: 'uncheckItem' },
    })
  }
  function navigateToShop() {
    history.replace({
      pathname: `/shop/${shopTitlesToMatchingItems[0]}`,
      state: { shopId: shopIdsToMatchingItems[0] },
    })
  }
}

const PageLayout = styled.div`
  margin-top: 35px;
  display: grid;
  grid-template-rows: auto 40vh auto auto;
  gap: 25px;
  align-items: start;
  justify-items: center;
`
const HeaderPositioned = styled(Header)`
  position: fixed;
  z-index: var(--z-index-header);
  top: 0;
  left: 0;
  width: 100%;
`
