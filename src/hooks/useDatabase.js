import { useRef, useState, useEffect } from 'react'
import produce from 'immer'
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

  useEffect(() => {
    saveLocally(STORAGE_KEY, database)
  }, [database])

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
    deleteShop,
    visibilityUndoButton,
  }

  function addShop(newId) {
    setDatabase(
      produce(database, (draft) => {
        draft.shops.allIds.push(newId)
        draft.shops.byId[newId] = { id: newId, title: '', items: [] }
      })
    )
  }

  function changeShopTitle(shopId, fieldValue) {
    setDatabase(
      produce(database, (draft) => {
        draft.shops.byId[shopId].title = fieldValue
      })
    )
  }

  function addListItem(shopId, title = '', isChecked = false) {
    const newId = uuid()
    setDatabase(
      produce(database, (draft) => {
        draft.shops.byId[shopId].items.push(newId)
        draft.items.allIds.push(newId)
        draft.items.byId[newId] = { id: newId, title, isChecked }
      })
    )
  }

  function changeItemTitle(targetId, fieldValue) {
    setDatabase(
      produce(database, (draft) => {
        draft.items.byId[targetId].title = fieldValue
      })
    )
  }

  function toggleIsChecked(targetId) {
    setDatabase(
      produce(database, (draft) => {
        draft.items.byId[targetId].isChecked = !draft.items.byId[targetId]
          .isChecked
      })
    )
  }

  function rearrangeListOrder(indexFrom, indexTo, shopId) {
    const idsShopItems = [...database.shops.byId[shopId].items]
    const [targetItem] = idsShopItems.splice(indexFrom, 1)
    idsShopItems.splice(indexTo, 0, targetItem)

    setDatabase(
      produce(database, (draft) => {
        draft.shops.byId[shopId].items = idsShopItems
      })
    )
  }

  /* ------------------------------------------------- */

  function deleteListItem(targetId, shopId) {
    cacheToBeDeletedListItem(targetId, shopId)
    deleteListItemIdFromShopItems(targetId, shopId)
    deleteListItemFromAllIds(targetId)
    deleteListItemFromById(targetId)
    displayUndoButton()
  }

  function cacheToBeDeletedListItem(targetId, shopId) {
    const title = database.items.byId[targetId].title
    const isChecked = database.items.byId[targetId].isChecked
    setDeletedListItem({ shopId, title, isChecked })
  }

  function deleteListItemIdFromShopItems(targetId, shopId) {
    setDatabase({
      ...database,
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
    })
  }

  function deleteListItemFromAllIds(targetId) {
    setDatabase({
      ...database,
      items: {
        byId: database.items.byId,
        allIds: database.items.allIds.filter((id) => id !== targetId),
      },
    })
  }

  function deleteListItemFromById(targetId) {
    delete database.items.byId[targetId]
    setDatabase(database)
  }

  function displayUndoButton() {
    setVisibilityUndoButton('shown')
    setFadeTimer()
  }

  function setFadeTimer() {
    fadeTimer.current && clearTimeout(fadeTimer.current)
    fadeTimer.current = setTimeout(() => setVisibilityUndoButton('fade'), 4000)
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

  /* ------------------------------------------------- */

  /* function deleteShop(targetId) {
      deleteShopIdFromAllIds(targetId)
      deleteShopFromById(targetId)
      const shopItems = database.shops.byId[targetId].items
      deleteShopRelatedItems(shopItems)
    }
    function deleteShopIdFromAllIds(targetId) {
      setDatabase({
      ...database,
      shops: {
        ...database.shops,
        allIds: database.shops.allIds.filter((id) => id !== targetId),
      },
    })
  }
  function deleteShopFromById(targetId) {
    delete database.shops.byId[targetId]
  }
  function deleteShopRelatedItems(shopItems) {} */

  function deleteShop(targetId) {
    const shopItems = database.shops.byId[targetId].items
    console.log({ shopItems })
    setDatabase(
      produce(database, (draft) => {
        // draft.shops.allIds = draft.shops.allIds.filter((id) => id !== targetId)
        draft.shops.allIds.splice(draft.shops.allIds.indexOf(targetId), 1)
        delete draft.shops.byId[targetId]
        draft.items.allIds = draft.items.allIds.filter(
          (id) => !shopItems.includes(id)
        )
        shopItems.forEach((idToBeDeleted) => {
          console.log({ shopItems })
          console.log({ idToBeDeleted })
          return delete draft.items.byId[idToBeDeleted]
        })
      })
    )
  }
}
