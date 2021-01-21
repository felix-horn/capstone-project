import { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Quagga from 'quagga'
import SaveIcon from '@material-ui/icons/Save'
import ScanIcon from '@material-ui/icons/CropFree'

import Header from '../00.SharedComponents/01.UI-Elements/02.Components/Header'
import FeedbackCard from './02.Components/FeedbackCard'
import ButtonRectangle from './01.UI-Elements/ButtonRectangle'
import { getItemTitle } from '../services/database.services'

PageFeedbackSetup.propTypes = {
  database: PropTypes.object.isRequired,
  changeBarcode: PropTypes.func.isRequired,
}

export default function PageFeedbackSetup({ database, changeBarcode }) {
  const itemId = useLocation().state.itemId
  const itemTitle = getItemTitle(database, itemId)
  const barcode = useLocation().state.barcode
  const shopId = useLocation().state.shopId
  const history = useHistory()

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
    <PageLayout>
      <HeaderPositioned shopId={shopId} />
      <ItemTitle>{itemTitle}</ItemTitle>
      <FeedbackCard feedback="verify" barcode={barcode} />
      <ButtonRectangle
        title="Speichern"
        onClick={navigateBackToShop}
        className="primary"
      >
        <SaveIcon />
      </ButtonRectangle>
      <ButtonRectangle title="Erneut scannen" onClick={navigateBackToScanner}>
        <ScanIcon />
      </ButtonRectangle>
    </PageLayout>
  )

  function navigateBackToShop() {
    history.goBack()
  }

  function navigateBackToScanner() {
    history.replace({
      pathname: '/scanner',
      state: { itemId, itemTitle, shopId, useCase: 'setup' },
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
const ItemTitle = styled.strong`
  font-size: 1.2rem;
`
