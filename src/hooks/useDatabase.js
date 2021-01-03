import { useState, useEffect } from 'react'
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

  return {
    database,
    addShop,
    changeShopTitle,
    addListItem,
    changeItemTitle,
    changeBarcode,
    toggleIsChecked,
    uncheckItemViaBarcode,
    rearrangeListOrder,
    deleteListItem,
    deleteShop,
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

  function changeBarcode(targetId, barcode) {
    setDatabase(
      produce(database, (draft) => {
        draft.items.byId[targetId].barcode = barcode
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

  function uncheckItemViaBarcode(targetIds) {
    setDatabase(
      produce(database, (draft) => {
        targetIds.map(
          (targetId) => (draft.items.byId[targetId].isChecked = false)
        )
      })
    )
  }

  function rearrangeListOrder(indexFrom, indexTo, shopId) {
    const idsShopItems = [...database.shops.byId[shopId].items]
    const targetItem = idsShopItems[indexFrom]
    // remove id from initial position
    idsShopItems.splice(indexFrom, 1)
    // insert id in new position
    idsShopItems.splice(indexTo, 0, targetItem)

    console.log(
      { indexFrom },
      { indexTo },
      'before: ',
      database.shops.byId[shopId].items,
      'after: ',
      idsShopItems
    )

    setDatabase(
      produce(database, (draft) => {
        draft.shops.byId[shopId].items = idsShopItems
      })
    )
  }

  function deleteListItem(itemId, shopId) {
    setDatabase(
      produce(database, (draft) => {
        // remove item's shop allocation
        draft.shops.byId[shopId].items.splice(
          draft.shops.byId[shopId].items.indexOf(itemId),
          1
        )
        // remove item
        draft.items.allIds.splice(draft.items.allIds.indexOf(itemId), 1)
        delete draft.items.byId[itemId]
      })
    )
  }

  function deleteShop(shopId) {
    const idsShopItems = database.shops.byId[shopId].items
    setDatabase(
      produce(database, (draft) => {
        // remove shop
        draft.shops.allIds.splice(draft.shops.allIds.indexOf(shopId), 1)
        delete draft.shops.byId[shopId]
        // remove all items allocated to the shop
        draft.items.allIds = draft.items.allIds.filter(
          (id) => !idsShopItems.includes(id)
        )
        idsShopItems.forEach((idToBeDeleted) => {
          return delete draft.items.byId[idToBeDeleted]
        })
      })
    )
  }
}
