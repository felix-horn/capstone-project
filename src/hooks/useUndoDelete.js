import { useState } from 'react'
import { getItemCheckStatus, getItemTitle } from '../services/database.services'

export default function useUndoDelete(database, addListItem) {
  const [stateButtonUndo, setStateButtonUndo] = useState('')
  const [deletedListItem, setDeletedListItem] = useState({})

  return {
    stateButtonUndo,
    cacheDeletedListItem,
    undoDelete,
  }

  function cacheDeletedListItem(targetId, shopId) {
    const title = getItemTitle(database, targetId)
    const isChecked = getItemCheckStatus(database, targetId)
    setDeletedListItem({ shopId, title, isChecked })
    setStateButtonUndo('active')
  }

  function undoDelete() {
    setStateButtonUndo('inactive')
    addListItem(
      deletedListItem.shopId,
      deletedListItem.title,
      deletedListItem.isChecked
    )
  }
}
