import { Switch, Route } from 'react-router-dom'
import useList from './hooks/useList'
import styled from 'styled-components/macro'
import OverviewPage from './03.Pages/OverviewPage'
import ShopPage from './03.Pages/ShopPage'

export default function App() {
  const {
    listTitle,
    list,
    addListItem,
    changeItemTitle,
    handleTitleInputChange,
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
            listTitle={listTitle}
            list={list}
            handleTitleInputChange={handleTitleInputChange}
            addListItem={addListItem}
            changeTitle={changeItemTitle}
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
