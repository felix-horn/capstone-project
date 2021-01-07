import { useState } from 'react'
import { getItemCheckStatus, getItemTitle } from '../services/database.services'

export default function useUndoDelete(database, addListItem) {
  const [visibilityButtonUndo, setVisibilityButtonUndo] = useState('hidden')
  const [deletedListItem, setDeletedListItem] = useState({})

  return {
    visibilityButtonUndo,
    cacheDeletedListItem,
    undoDelete,
  }

  function cacheDeletedListItem(targetId, shopId) {
    const title = getItemTitle(database, targetId)
    const isChecked = getItemCheckStatus(database, targetId)
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
