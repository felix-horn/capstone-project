import { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from '../00.SharedComponents/01.UI-Elements/02.Components/Header'
import Button from './01.UI-Elements/Button'
import Quagga from 'quagga'
import FeedbackCard from './01.UI-Elements/FeedbackCard'
import SaveIcon from '@material-ui/icons/Save'
import ScanIcon from '@material-ui/icons/CropFree'
import { getItemTitle, getShopTitle } from '../services/filter.services'

PageFeedbackSetup.propTypes = {
  database: PropTypes.object.isRequired,
  changeBarcode: PropTypes.func.isRequired,
}

export default function PageFeedbackSetup({ database, changeBarcode }) {
  const history = useHistory()
  const location = useLocation()
  const itemId = location.state.itemId
  const shopId = location.state.shopId
  const barcode = location.state.barcode
  const itemTitle = getItemTitle(database, itemId)

  useEffect(() => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(10)
    }
    //racecondition prevents camera crash on smartphone
    setTimeout(() => Quagga.stop())
    changeBarcode(itemId, barcode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageGrid>
      <HeaderPositioned shopId={shopId} />
      <ItemTitle>{itemTitle}</ItemTitle>
      <FeedbackCard feedback="validate" barcode={barcode} />
      <Button
        title={'Speichern'}
        onClick={navigateBackToShop}
        className="primary"
      >
        <SaveIcon />
      </Button>
      <Button title={'Erneut scannen'} onClick={navigateToScanner}>
        <ScanIcon />
      </Button>
    </PageGrid>
  )

  function navigateBackToShop() {
    history.replace({
      pathname: `/shop/${getShopTitle(database, shopId)}`,
      state: { shopId },
    })
  }
  function navigateToScanner() {
    history.push({
      pathname: '/scanner',
      state: { itemId, itemTitle, shopId, useCase: 'setup' },
    })
  }
}

const HeaderPositioned = styled(Header)`
  position: fixed;
  z-index: var(--z-index-header);
  top: 0;
  left: 0;
  width: 100%;
`

const ItemTitle = styled.strong`
  font-size: 1.2rem;
`

const PageGrid = styled.div`
  margin-top: 35px;
  display: grid;
  grid-template-rows: auto 40vh auto auto;
  gap: 25px;
  align-items: start;
  justify-items: center;
`
