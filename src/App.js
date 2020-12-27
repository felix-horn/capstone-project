import { Switch, Route } from 'react-router-dom'
import useDatabase from './hooks/useDatabase'
import styled from 'styled-components/macro'
import PageOverview from './01.PageOverview/PageOverview'
import ShopPage from './02.ShopPage/ShopPage'
import ScannerPage from './03.ScannerPage/ScannerPage'
import PageFeedbackScan from './04.FeedbackPages/PageFeedbackScan'
import PageFeedbackSetup from './04.FeedbackPages/PageFeedbackSetup'

export default function App() {
  const {
    database,
    addShop,
    addListItem,
    changeItemTitle,
    changeShopTitle,
    toggleIsChecked,
    uncheckItemViaBarcode,
    deleteListItem,
    undoDelete,
    rearrangeListOrder,
    deleteShop,
    visibilityUndoButton,
    changeBarcode,
  } = useDatabase()
  return (
    <Switch>
      <Route exact path="/">
        <PageOverview database={database} addShop={addShop} />
      </Route>
      <Route path="/shop">
        <ShopPage
          database={database}
          changeShopTitle={changeShopTitle}
          addListItem={addListItem}
          changeItemTitle={changeItemTitle}
          toggleIsChecked={toggleIsChecked}
          deleteListItem={deleteListItem}
          rearrangeListOrder={rearrangeListOrder}
          visibilityUndoButton={visibilityUndoButton}
          undoDelete={undoDelete}
          deleteShop={deleteShop}
        />
      </Route>
      <Route
        path="/scanner"
        onEnter={() => console.log('entered')}
        onLeave={() => console.log('left')}
      >
        <ScannerPage />
      </Route>
      <Route path="/feedback-setup">
        <PageFeedbackSetup database={database} changeBarcode={changeBarcode} />
      </Route>
      <Route path="/feedback-scan">
        <PageFeedbackScan
          database={database}
          uncheckItemViaBarcode={uncheckItemViaBarcode}
        />
      </Route>
    </Switch>
  )
}
