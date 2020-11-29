import useList from './hooks/useList'
import styled from 'styled-components/macro'
import UncheckedList from './02.Components/UncheckedList'
import CheckedList from './02.Components/CheckedList'
import UndoButton from './01.UI-Elements/UndoButton'
import AddItemButton from './01.UI-Elements/AddItemButton'

export default function App() {
  const {
    list,
    uncheckedIds,
    checkedIds,
    addListItem,
    addListItemOnEnter,
    handleInputChange,
    toggleIsChecked,
    deleteListItem,
    undoDelete,
    rearrangeListOrder,
    visibilityUndoButton,
  } = useList()
  return (
    <>
      <UncheckedList
        listAllocation={uncheckedIds}
        list={list}
        handleInputChange={handleInputChange}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={deleteListItem}
        addListItemOnEnter={addListItemOnEnter}
        rearrangeListOrder={rearrangeListOrder}
      />
      <AddItemButton onClick={() => addListItem()} />
      <CheckedList
        checked
        listAllocation={checkedIds}
        list={list}
        handleInputChange={handleInputChange}
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
