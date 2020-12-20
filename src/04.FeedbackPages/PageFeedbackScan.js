import { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Quagga from 'quagga'
import Header from '../00.SharedComponents/01.UI-Elements/02.Components/Header'
import Explanation from '../00.SharedComponents/01.UI-Elements/02.Components/Explanation'
import FeedbackCard from './01.UI-Elements/FeedbackCard'
import Button from './01.UI-Elements/Button'

PageFeedbackScan.propTypes = {
  database: PropTypes.object.isRequired,
  changeBarcode: PropTypes.func.isRequired,
}

export default function PageFeedbackScan({ database, uncheckItemViaBarcode }) {
  const history = useHistory()
  const location = useLocation()
  const barcode = location.state.barcode
  const matchingIds = database.items.allIds.filter(
    (id) => database.items.byId[id]?.barcode === barcode
  )

  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(10)
    }
    Quagga.stop()
    if (matchingIds.length > 0) {
      uncheckItemViaBarcode(matchingIds)
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
        database={database}
        barcode={barcode}
        matchingIds={matchingIds}
      />
      <ButtonPositioned
        title={
          feedback === 'success' ? 'Weiteren Code scannen' : 'Erneut scannen'
        }
        onClick={() => history.goBack()}
        className="primary"
      />
      <ButtonPositioned
        title={'Zurück zur Übersicht'}
        onClick={() => history.go(-2)}
      />
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
