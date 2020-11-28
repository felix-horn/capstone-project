import useList from './hooks/useList'

import List from './02.Components/List'
import UndoButton from './01.UI-Elements/UndoButton'
import styled from 'styled-components/macro'
import AddButton from './01.UI-Elements/AddButton'

export default function App() {
  const {
    list,
    uncheckedIds,
    checkedIds,
    addListItem,
    addListItemOnEnter,
    handleChange,
    toggleIsChecked,
    deleteListItem,
    undoDelete,
    visibilityUndoButton,
  } = useList()
  return (
    <>
      <List
        listAllocation={uncheckedIds}
        list={list}
        handleChange={handleChange}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={deleteListItem}
        addListItemOnEnter={addListItemOnEnter}
      />
      <AddButton onClick={() => addListItem()} />
      <List
        checked
        listAllocation={checkedIds}
        list={list}
        handleChange={handleChange}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={deleteListItem}
        addListItemOnEnter={addListItemOnEnter}
      />
      <UndoButtonStyled className={visibilityUndoButton} onClick={undoDelete} />
    </>
  )
}

const UndoButtonStyled = styled(UndoButton)`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: center;

  &.shown {
  }

  &.fade {
    animation: 1s fadeOut ease forwards;
  }

  &.hidden {
    display: none;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      pointer-events: all;
    }
    100% {
      opacity: 0;
      pointer-events: none;
    }
  }
`
