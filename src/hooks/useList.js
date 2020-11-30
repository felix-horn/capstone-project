import { useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'

export default function useList() {
  const [list, setList] = useState({
    byId: {},
    allIds: [],
  })

  const [deletedListItem, setDeletedListItem] = useState({
    title: '',
    isChecked: false,
  })

  const [visibilityUndoButton, setVisibilityUndoButton] = useState('hidden')
  const fadeTimer = useRef()

  return {
    list,
    addListItem,
    handleInputChange,
    toggleIsChecked,
    deleteListItem,
    undoDelete,
    rearrangeListOrder,
    visibilityUndoButton,
  }

  function addListItem(title = '', isChecked = false) {
    const targetId = uuid()
    setList({
      byId: {
        ...list.byId,
        [targetId]: {
          targetId,
          title,
          isChecked,
        },
      },
      allIds: [...list.allIds, targetId],
    })
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
    const title = list.byId[targetId].title
    const isChecked = list.byId[targetId].isChecked
    setDeletedListItem({ title, isChecked })

    delete list.byId[targetId]
    setList({
      byId: list.byId,
      allIds: list.allIds.filter((id) => id !== targetId),
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
