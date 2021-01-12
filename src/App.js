import { Switch, Route } from 'react-router-dom'
import useDatabase from './hooks/useDatabase'
import PageOverview from './01.Overview/PageOverview'
import PageShop from './02.Shop/PageShop'
import PageScanner from './03.Scanner/PageScanner'
import PageFeedbackScan from './04.Feedback/PageFeedbackScan'
import PageFeedbackSetup from './04.Feedback/PageFeedbackSetup'

export default function App() {
  const {
    database,
    addShop,
    changeShopTitle,
    addListItem,
    changeItemTitle,
    changeBarcode,
    toggleIsChecked,
    uncheckItemViaBarcode,
    rearrangeListOrder,
    deleteListItem,
    deleteShop,
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
      <Route path="/scanner">
        <PageScanner />
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
