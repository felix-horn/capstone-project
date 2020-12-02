import { Switch, Route } from 'react-router-dom'
import useList from './hooks/useList'
import styled from 'styled-components/macro'
import OverviewPage from './03.Pages/OverviewPage'
import ShopPage from './03.Pages/ShopPage'

export default function App() {
  const {
    shopTitle,
    list,
    addListItem,
    changeItemTitle,
    changeShopTitle,
    toggleIsChecked,
    deleteListItem,
    undoDelete,
    rearrangeListOrder,
    visibilityUndoButton,
  } = useList()
  return (
    <AppStyled>
      <Switch>
        {/* <Route exact path="/">
          <OverviewPage />
        </Route> */}
        <Route exact path="/">
          <ShopPage
            shopTitle={shopTitle}
            list={list}
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
