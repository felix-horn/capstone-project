import { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from '../00.SharedComponents/01.UI-Elements/02.Components/Header'
import FeedbackCardSetup from './01.UI-Elements/FeedbackCardSetup'
import Button from './01.UI-Elements/Button'
import Quagga from 'quagga'
import FeedbackCard from './01.UI-Elements/FeedbackCard'

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
  const itemTitle = database.items.byId[itemId]?.title

  useEffect(() => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(10)
    }
    setTimeout(Quagga.stop(), 500)
    changeBarcode(itemId, barcode)
  }, [])

  return (
    <PageFeedbackSetupStyled>
      <HeaderStyled shopId={shopId} />
      <ItemTitle>{itemTitle}</ItemTitle>
      <FeedbackCard feedback="validate" barcode={barcode} />
      <ButtonPositioned
        title={'Speichern'}
        onClick={() => history.go(-2)}
        className="primary"
      />
      <ButtonPositioned
        title={'Erneut scannen'}
        onClick={() => history.goBack()}
      />
    </PageFeedbackSetupStyled>
  )
}

const HeaderStyled = styled(Header)`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
`

const ItemTitle = styled.strong`
  font-size: 1.2rem;
`

const PageFeedbackSetupStyled = styled.div`
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
