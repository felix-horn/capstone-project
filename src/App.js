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
        listAllocation={uncheckedIds}
        list={list}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={deleteListItem}
      />
      <InputForm addListItem={addListItem} />
      <List
        checked
        listAllocation={checkedIds}
        list={list}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={deleteListItem}
      />

      <PositioningWrapper>
        {isShownUndoButton && <UndoButton undoDelete={undoDelete} />}
      </PositioningWrapper>
    </>
  )
}

const PositioningWrapper = styled.div`
  position: fixed;
  width: calc(100vw - 60px);
  display: flex;
  justify-content: center;
  bottom: 100px;
`
