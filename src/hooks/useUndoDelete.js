import { useState } from 'react'

export default function useUndoDelete(database, addListItem) {
  const [visibilityButtonUndo, setVisibilityButtonUndo] = useState('hidden')
  const [deletedListItem, setDeletedListItem] = useState({})

  return {
    visibilityButtonUndo,
    cacheDeletedListItem,
    undoDelete,
  }

  function cacheDeletedListItem(targetId, shopId) {
    const title = database.items.byId[targetId].title
    const isChecked = database.items.byId[targetId].isChecked
    setDeletedListItem({ shopId, title, isChecked })
    setVisibilityButtonUndo('shown')
  }

  function undoDelete() {
    setVisibilityButtonUndo('grayedOut')
    addListItem(
      deletedListItem.shopId,
      deletedListItem.title,
      deletedListItem.isChecked
    )
  }
}
