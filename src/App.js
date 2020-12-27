import { Switch, Route } from 'react-router-dom'
import useDatabase from './hooks/useDatabase'
import PageOverview from './01.PageOverview/PageOverview'
import PageShop from './02.PageShop/PageShop'
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
    rearrangeListOrder,
    deleteShop,
    changeBarcode,
  } = useDatabase()
  return (
    <Switch>
      <Route exact path="/">
        <PageOverview database={database} addShop={addShop} />
      </Route>
      <Route path="/shop">
        <PageShop
          database={database}
          changeShopTitle={changeShopTitle}
          addListItem={addListItem}
          changeItemTitle={changeItemTitle}
          toggleIsChecked={toggleIsChecked}
          deleteListItem={deleteListItem}
          rearrangeListOrder={rearrangeListOrder}
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
