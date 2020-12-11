import { Switch, Route } from 'react-router-dom'
import useDatabase from './hooks/useDatabase'
import styled from 'styled-components/macro'
import OverviewPage from './01.OverviewPage/OverviewPage'
import ShopPage from './02.ShopPage/ShopPage'
import ScannerPage from './03.ScannerPage/ScannerPage'

export default function App() {
  const {
    database,
    addShop,
    addListItem,
    changeItemTitle,
    changeShopTitle,
    toggleIsChecked,
    deleteListItem,
    undoDelete,
    rearrangeListOrder,
    deleteShop,
    visibilityUndoButton,
    changeBarcode,
  } = useDatabase()
  return (
    <AppStyled>
      <Switch>
        <Route exact path="/">
          <OverviewPage database={database} addShop={addShop} />
        </Route>
        <Route path="/ShopPage">
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
        <Route path="/ScannerPage">
          <ScannerPage database={database} changeBarcode={changeBarcode} />
        </Route>
      </Switch>
    </AppStyled>
  )
}

const AppStyled = styled.div``
