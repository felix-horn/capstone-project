import { Switch, Route } from 'react-router-dom'
import useDatabase from './hooks/useDatabase'
import styled from 'styled-components/macro'
//import OverviewPage from './01.Pages/OverviewPage'
import ShopPage from './02.ShopPage/ShopPage'

export default function App() {
  const {
    database,
    addListItem,
    changeItemTitle,
    changeShopTitle,
    toggleIsChecked,
    deleteListItem,
    undoDelete,
    rearrangeListOrder,
    visibilityUndoButton,
  } = useDatabase()
  return (
    <AppStyled>
      <Switch>
        {/* <Route exact path="/">
          <OverviewPage />
        </Route> */}
        <Route exact path="/">
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
          />
        </Route>
      </Switch>
    </AppStyled>
  )
}

const AppStyled = styled.div``
