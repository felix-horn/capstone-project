/* shops */

function getShopItemIds(database, shopId) {
  return database.shops.byId[shopId].items
}

function getShopItemIndex(database, shopId, itemId) {
  return getShopItemIds(database, shopId).indexOf(itemId)
}

function getCheckedItemIds(database, shopId) {
  return database.shops.byId[shopId].items.filter(
    (id) => database.items.byId[id].isChecked
  )
}

function getUncheckedItemIds(database, shopId) {
  return database.shops.byId[shopId].items.filter(
    (id) => !database.items.byId[id].isChecked
  )
}

function getQuantityCheckedItems(database, shopId) {
  return getCheckedItemIds(database, shopId).lenth
}

function getShopTitle(database, shopId) {
  return database.shops.byId[shopId].title
}

function getShopIdsByItemIds(database, itemIds) {
  return itemIds.map((itemId) =>
    database.shops.allIds.find((shopId) =>
      database.shops.byId[shopId].items.includes(itemId)
    )
  )
}

function getAllShopIds(database) {
  return database.shops.allIds
}

function getAllShopTitles(database) {
  return database.shops.allIds.map((id) => database.shops.byId[id].title)
}

/* items */

function getItemTitle(database, itemId) {
  return database.items.byId[itemId].title
}

function getItemTitles(database, itemIds) {
  return itemIds.map((id) => database.items.byId[id]?.title)
}

function getItemCheckStatus(database, itemId) {
  return database.items.byId[itemId].isChecked
}

function getItemBarcodeStatus(database, itemId) {
  return !!database.items.byId[itemId].barcode
}

function getItemIdsByBarcode(database, barcode) {
  return database.items.allIds.filter(
    (id) => database.items.byId[id]?.barcode === barcode
  )
}

export {
  getShopItemIds,
  getShopItemIndex,
  getCheckedItemIds,
  getUncheckedItemIds,
  getQuantityCheckedItems,
  getShopTitle,
  getShopIdsByItemIds,
  getAllShopIds,
  getAllShopTitles,
  getItemTitle,
  getItemTitles,
  getItemCheckStatus,
  getItemBarcodeStatus,
  getItemIdsByBarcode,
}
