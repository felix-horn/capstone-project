import { useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'

export default function useList() {
  const [list, setList] = useState({
    byId: {},
    allIds: [],
  })
  // const checkedIds = list.allIds.filter((id) => list.byId[id].isChecked)
  // const uncheckedIds = list.allIds.filter((id) => !list.byId[id].isChecked)

  const [deletedListItem, setDeletedListItem] = useState({
    title: '',
    isChecked: false,
  })

  const [visibilityUndoButton, setVisibilityUndoButton] = useState('hidden')
  const fadeTimer = useRef()

  return {
    list,
    addListItem,
    addListItemOnEnter,
    handleInputChange,
    toggleIsChecked,
    // uncheckedIds,
    // checkedIds,
    deleteListItem,
    undoDelete,
    rearrangeListOrder,
    visibilityUndoButton,
  }

  function addListItem(title = '', isChecked = false) {
    const id = uuid()
    setList({
      byId: {
        ...list.byId,
        [id]: {
          id,
          title,
          isChecked,
        },
      },
      allIds: [...list.allIds, id],
    })
  }

  function addListItemOnEnter(targetId) {
    // const lastUncheckedId = uncheckedIds[uncheckedIds.length - 1]
    // lastUncheckedId === targetId && addListItem()
  }

  function handleInputChange(e) {
    const fieldValue = e.target.value
    const targetId = e.target.name

    setList({
      ...list,
      byId: {
        ...list.byId,
        [targetId]: {
          ...list.byId[targetId],
          title: fieldValue,
        },
      },
    })
  }

  function toggleIsChecked(targetId) {
    //boolean "isChecked" is toggled in the corresponding byId-object
    setList({
      ...list,
      byId: {
        ...list.byId,
        [targetId]: {
          ...list.byId[targetId],
          isChecked: !list.byId[targetId].isChecked,
        },
      },
    })
  }

  function rearrangeListOrder(indexFrom, indexTo) {
    const copyOfAllIds = [...list.allIds]
    const [targetItem] = copyOfAllIds.splice(indexFrom, 1)
    copyOfAllIds.splice(indexTo, 0, targetItem)

    setList({
      ...list,
      allIds: copyOfAllIds,
    })
  }

  function deleteListItem(targetId) {
    const copyOfById = { ...list.byId }
    delete copyOfById[targetId]
    const byIdWithoutTargetId = copyOfById

    setList({
      byId: byIdWithoutTargetId,
      allIds: list.allIds.filter((id) => id !== targetId),
    })

    const title = list.byId[targetId].title
    const isChecked = list.byId[targetId].isChecked
    setDeletedListItem({ title, isChecked })

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
