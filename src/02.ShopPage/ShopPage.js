import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from './02.Components/Header'
import UncheckedList from './02.Components/UncheckedList'
import CheckedList from './02.Components/CheckedList'
import Menu from './02.Components/Menu'
import ShopTitle from './01.UI-Elements/ShopTitle'
import AddItemButton from './01.UI-Elements/AddItemButton'
import UndoButton from './01.UI-Elements/UndoButton'

ShopPage.propTypes = {
  database: PropTypes.object.isRequired,
  changeShopTitle: PropTypes.func.isRequired,
  addListItem: PropTypes.func.isRequired,
  changeItemTitle: PropTypes.func.isRequired,
  toggleIsChecked: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired,
  rearrangeListOrder: PropTypes.func.isRequired,
  visibilityUndoButton: PropTypes.string.isRequired,
  undoDelete: PropTypes.func.isRequired,
}

export default function ShopPage({
  database,
  changeShopTitle,
  addListItem,
  changeItemTitle,
  toggleIsChecked,
  deleteListItem,
  rearrangeListOrder,
  visibilityUndoButton,
  deleteShop,
  undoDelete,
}) {
  const location = useLocation()
  const shopId = location.state.shopId

  const [isMenuVisible, setIsMenuVisible] = useState(false)
  return (
    <>
      <HeaderStyled onClick={toggleMenu} />
      {isMenuVisible && (
        <ClickableMenuBackground onClick={toggleMenu}>
          <MenuStyled deleteShop={() => deleteShop(shopId)} />
        </ClickableMenuBackground>
      )}
      <ShopTitleStlyed
        shopId={shopId}
        database={database}
        changeTitle={(fieldValue) => changeShopTitle(shopId, fieldValue)}
      />
      <UncheckedList
        shopId={shopId}
        database={database}
        addListItem={() => addListItem(shopId)}
        changeTitle={changeItemTitle}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={(id) => deleteListItem(id, shopId)}
        rearrangeListOrder={(indexFrom, indexTo) =>
          rearrangeListOrder(indexFrom, indexTo, shopId)
        }
      />
      <AddItemButton onClick={() => addListItem(shopId)} />
      <CheckedList
        shopId={shopId}
        database={database}
        changeTitle={changeItemTitle}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={(id) => deleteListItem(id, shopId)}
      />
      <UndoButtonStyled className={visibilityUndoButton} onClick={undoDelete} />
    </>
  )
  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible)
  }
}

const ClickableMenuBackground = styled.div`
  position: fixed;
  z-index: 150;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const MenuStyled = styled(Menu)`
  position: fixed;
  z-index: 200;
  top: 45px;
  right: 0;
`
const HeaderStyled = styled(Header)`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
`

const ShopTitleStlyed = styled(ShopTitle)`
  margin-top: 40px;
`

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
