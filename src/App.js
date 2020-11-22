import useList from './hooks/useList'

import List from './02.Components/List'
import InputForm from './01.UI-Elements/InputForm'
import UndoButton from './01.UI-Elements/UndoButton'
import styled from 'styled-components/macro'

export default function App() {
  const {
    list,
    uncheckedIds,
    checkedIds,
    addListItem,
    toggleIsChecked,
    deleteListItem,
    undoDelete,
    isShownUndoButton,
  } = useList()
  return (
    <>
      <List
        list={list}
        listAllocation={uncheckedIds}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={deleteListItem}
      />
      <InputForm addListItem={addListItem} />
      <List
        checked
        list={list}
        listAllocation={checkedIds}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={deleteListItem}
      />
      {isShownUndoButton && (
        <AbsoluteWrapper>
          <UndoButton undoDelete={undoDelete} />
        </AbsoluteWrapper>
      )}
    </>
  )
}

const AbsoluteWrapper = styled.div`
  position: fixed;
  width: calc(100vw - 60px);
  display: flex;
  justify-content: center;
  bottom: 50px;
`
