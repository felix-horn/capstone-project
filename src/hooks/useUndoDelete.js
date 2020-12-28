import { useState } from 'react'

export default function useUndoDelete(database, addListItem) {
  const [isButtonUndoActive, setIsButtonUndoActive] = useState(false)
  const [deletedListItem, setDeletedListItem] = useState({})

  return {
    isButtonUndoActive,
    cacheDeletedListItem,
    undoDelete,
  }

  function cacheDeletedListItem(targetId, shopId) {
    const title = database.items.byId[targetId].title
    const isChecked = database.items.byId[targetId].isChecked
    setDeletedListItem({ shopId, title, isChecked })
    setIsButtonUndoActive(true)
  }

  function undoDelete() {
    setIsButtonUndoActive(!isButtonUndoActive)
    addListItem(
      deletedListItem.shopId,
      deletedListItem.title,
      deletedListItem.isChecked
    )
  }
}
