import styled from 'styled-components/macro'
import UncheckedList from '../02.Components/UncheckedList'
import CheckedList from '../02.Components/CheckedList'
import AddItemButton from '../01.UI-Elements/AddItemButton'
import UndoButton from '../01.UI-Elements/UndoButton'
import ShopTitle from '../01.UI-Elements/ShopTitle'

export default function ShopPage({
  shopTitle,
  changeShopTitle,
  list,
  addListItem,
  changeItemTitle,
  toggleIsChecked,
  deleteListItem,
  rearrangeListOrder,
  visibilityUndoButton,
  undoDelete,
}) {
  return (
    <>
      <ShopTitle title={shopTitle} changeTitle={changeShopTitle} />
      <UncheckedList
        list={list}
        addListItem={addListItem}
        changeTitle={changeItemTitle}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={deleteListItem}
        rearrangeListOrder={rearrangeListOrder}
      />
      <AddItemButton onClick={() => addListItem()} />
      <CheckedList
        list={list}
        changeTitle={changeItemTitle}
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
