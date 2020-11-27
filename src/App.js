import useList from './hooks/useList'

import List from './02.Components/List'
import InputForm from './01.UI-Elements/InputForm'
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
        addListItem={addListItem}
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

  &.fadeToHide {
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
