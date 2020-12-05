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
        byId: {},
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
    addShop,
    changeShopTitle,
    addListItem,
    changeItemTitle,
    toggleIsChecked,
    deleteListItem,
    undoDelete,
    rearrangeListOrder,
    visibilityUndoButton,
  }

  function addShop(newId) {
    setDatabase({
      ...database,
      shops: {
        allIds: [...database.shops.allIds, newId],
        byId: {
          ...database.shops.byId,
          [newId]: {
            id: newId,
            title: '',
            items: [],
          },
        },
      },
    })
  }

  function changeShopTitle(shopId, fieldValue) {
    setDatabase({
      ...database,
      shops: {
        ...database.shops,
        byId: {
          ...database.shops.byId,
          [shopId]: {
            ...database.shops.byId[shopId],
            title: fieldValue,
          },
        },
      },
    })
  }

  function addListItem(shopId, title = '', isChecked = false) {
    const newId = uuid()
    setDatabase({
      shops: {
        ...database.shops,
        byId: {
          ...database.shops.byId,
          [shopId]: {
            ...database.shops.byId[shopId],
            items: [...database.shops.byId[shopId].items, newId],
          },
        },
      },
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

  function rearrangeListOrder(indexFrom, indexTo, shopId) {
    const idsShopItems = [...database.shops.byId[shopId].items]
    const [targetItem] = idsShopItems.splice(indexFrom, 1)
    idsShopItems.splice(indexTo, 0, targetItem)

    setDatabase({
      ...database,
      shops: {
        ...database.shops,
        byId: {
          ...database.shops.byId,
          [shopId]: {
            ...database.shops.byId[shopId],
            items: idsShopItems,
          },
        },
      },
    })
  }

  function deleteListItem(targetId, shopId) {
    const title = database.items.byId[targetId].title
    const isChecked = database.items.byId[targetId].isChecked
    setDeletedListItem({ shopId, title, isChecked })

    delete database.items.byId[targetId]
    setDatabase({
      shops: {
        ...database.shops,
        byId: {
          ...database.shops.byId,
          [shopId]: {
            ...database.shops.byId[shopId],
            items: database.shops.byId[shopId].items.filter(
              (id) => id !== targetId
            ),
          },
        },
      },
      items: {
        byId: database.items.byId,
        allIds: database.items.allIds.filter((id) => id !== targetId),
      },
    })

    setVisibilityUndoButton('shown')
    setFadeTimer()
  }

  function undoDelete() {
    addListItem(
      deletedListItem.shopId,
      deletedListItem.title,
      deletedListItem.isChecked
    )
    setVisibilityUndoButton('hidden')
    clearTimeout(fadeTimer.current)
  }

  function setFadeTimer() {
    fadeTimer.current && clearTimeout(fadeTimer.current)
    fadeTimer.current = setTimeout(() => setVisibilityUndoButton('fade'), 4000)
  }
}
