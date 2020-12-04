import { useRef, useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import saveLocally from '../lib/saveLocally'
import loadLocally from '../lib/loadLocally'

const STORAGE_KEY = 'database'

export default function useDatabase() {
  const [database, setDatabase] = useState(
    loadLocally(STORAGE_KEY) ?? {
      shops: {
        allIds: [],
        byId: {
          dummyId: {
            //this is only the preparation
            title: '', //for the datastructure for more than one shop
          },
        },
      },
      items: {
        allIds: [],
        byId: {},
      },
    }
  )

  useEffect(() => saveLocally(STORAGE_KEY, database), [database])

  const [deletedListItem, setDeletedListItem] = useState({
    title: '',
    isChecked: false,
  })

  const [visibilityUndoButton, setVisibilityUndoButton] = useState('hidden')
  const fadeTimer = useRef()

  return {
    database,
    changeShopTitle,
    addListItem,
    changeItemTitle,
    toggleIsChecked,
    deleteListItem,
    undoDelete,
    rearrangeListOrder,
    visibilityUndoButton,
  }

  function addListItem(title = '', isChecked = false) {
    const newId = uuid()
    setDatabase({
      ...database,
      items: {
        byId: {
          ...database.items.byId,
          [newId]: {
            id: newId,
            title,
            isChecked,
          },
        },
        allIds: [...database.items.allIds, newId],
      },
    })
  }

  function changeShopTitle(fieldValue) {
    setDatabase({
      ...database,
      shops: {
        ...database.shops,
        byId: {
          ...database.shops.byId,
          dummyId: {
            ...database.shops.byId['dummyId'], //this is only the preparation for the datastructure for more than one shop
            title: fieldValue,
          },
        },
      },
    })
  }

  function changeItemTitle(targetId, fieldValue) {
    setDatabase({
      ...database,
      items: {
        ...database.items,
        byId: {
          ...database.items.byId,
          [targetId]: {
            ...database.items.byId[targetId],
            title: fieldValue,
          },
        },
      },
    })
  }

  function toggleIsChecked(targetId) {
    setDatabase({
      ...database,
      items: {
        ...database.items,
        byId: {
          ...database.items.byId,
          [targetId]: {
            ...database.items.byId[targetId],
            isChecked: !database.items.byId[targetId].isChecked,
          },
        },
      },
    })
  }

  function rearrangeListOrder(indexFrom, indexTo) {
    const copyOfAllIds = [...database.items.allIds]
    const [targetItem] = copyOfAllIds.splice(indexFrom, 1)
    copyOfAllIds.splice(indexTo, 0, targetItem)

    setDatabase({
      ...database,
      items: {
        ...database.items,
        allIds: copyOfAllIds,
      },
    })
  }

  function deleteListItem(targetId) {
    const title = database.items.byId[targetId].title
    const isChecked = database.items.byId[targetId].isChecked
    setDeletedListItem({ title, isChecked })

    delete database.items.byId[targetId]
    setDatabase({
      ...database,
      items: {
        byId: database.items.byId,
        allIds: database.items.allIds.filter((id) => id !== targetId),
      },
    })

    setVisibilityUndoButton('shown')
    setFadeTimer()
  }

  function undoDelete() {
    addListItem(deletedListItem.title, deletedListItem.isChecked)
    setVisibilityUndoButton('hidden')
    clearTimeout(fadeTimer.current)
  }

  function setFadeTimer() {
    fadeTimer.current && clearTimeout(fadeTimer.current)
    fadeTimer.current = setTimeout(() => setVisibilityUndoButton('fade'), 4000)
  }
}
