import styled from 'styled-components/macro'
import UncheckedList from '../02.Components/UncheckedList'
import CheckedList from '../02.Components/CheckedList'
import AddItemButton from '../01.UI-Elements/AddItemButton'
import UndoButton from '../01.UI-Elements/UndoButton'
import ListTitle from '../01.UI-Elements/ListTitle'

export default function ShopPage({
  listTitle,
  handleTitleInputChange,
  list,
  addListItem,
  handleItemInputChange,
  toggleIsChecked,
  deleteListItem,
  rearrangeListOrder,
  visibilityUndoButton,
  undoDelete,
}) {
  return (
    <>
      <ListTitle title={listTitle} handleInputChange={handleTitleInputChange} />
      <UncheckedList
        list={list}
        addListItem={addListItem}
        handleInputChange={handleItemInputChange}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={deleteListItem}
        rearrangeListOrder={rearrangeListOrder}
      />
      <AddItemButton onClick={() => addListItem()} />
      <CheckedList
        list={list}
        handleInputChange={handleItemInputChange}
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
