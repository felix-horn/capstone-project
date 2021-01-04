import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import useUndoDelete from '../hooks/useUndoDelete'
import Header from '../00.SharedComponents/01.UI-Elements/02.Components/Header'
import OverlayMenu from '../00.SharedComponents/01.UI-Elements/02.Components/OverlayMenu'
import ShopTitle from './01.UI-Elements/ShopTitle'
import UncheckedList from './02.Components/UncheckedList'
import ButtonAddItem from './01.UI-Elements/ButtonAddItem'
import CheckedList from './02.Components/CheckedList'
import Footer from '../00.SharedComponents/01.UI-Elements/02.Components/Footer'

ShopPage.propTypes = {
  database: PropTypes.object.isRequired,
  changeShopTitle: PropTypes.func.isRequired,
  addListItem: PropTypes.func.isRequired,
  changeItemTitle: PropTypes.func.isRequired,
  toggleIsChecked: PropTypes.func.isRequired,
  deleteListItem: PropTypes.func.isRequired,
  rearrangeListOrder: PropTypes.func.isRequired,
}

export default function ShopPage({
  database,
  changeShopTitle,
  addListItem,
  changeItemTitle,
  toggleIsChecked,
  deleteListItem,
  rearrangeListOrder,
  deleteShop,
}) {
  const {
    visibilityButtonUndo,
    cacheDeletedListItem,
    undoDelete,
  } = useUndoDelete(database, addListItem)

  const location = useLocation()
  const shopId = location.state.shopId
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (
    <>
      <HeaderPositioned onClick={toggleMenu} />
      {isMenuVisible && (
        <OverlayMenu
          toggleMenu={toggleMenu}
          deleteShop={() => deleteShop(shopId)}
        />
      )}
      <ShopTitlePositioned
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
        deleteListItem={(id) => handelDeleteListItem(id, shopId)}
        rearrangeListOrder={(draggedId, indexToShopIds) =>
          rearrangeListOrder(draggedId, indexToShopIds, shopId)
        }
      />
      <ButtonAddItemPositioned onClick={() => addListItem(shopId)} />
      <CheckedList
        shopId={shopId}
        database={database}
        changeTitle={changeItemTitle}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={(id) => handelDeleteListItem(id, shopId)}
      />
      <FooterPositioned
        onClick={undoDelete}
        visibilityButtonUndo={visibilityButtonUndo}
      />
    </>
  )
  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible)
  }
  function handelDeleteListItem(itemId, shopId) {
    deleteListItem(itemId, shopId)
    cacheDeletedListItem(itemId, shopId)
  }
}

const HeaderPositioned = styled(Header)`
  position: fixed;
  z-index: var(--z-index-header);
  top: 0;
  left: 0;
  width: 100%;
`

const ShopTitlePositioned = styled(ShopTitle)`
  margin-top: 40px;
`

const ButtonAddItemPositioned = styled(ButtonAddItem)`
  margin-left: 30px;
  margin-bottom: 20px;
`

const FooterPositioned = styled(Footer)`
  position: fixed;
  z-index: var(--z-index-header);
  bottom: 0;
  left: 0;
  width: 100%;
`
