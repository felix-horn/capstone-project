import { useEffect, useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'

export default function useList() {
  const [list, setList] = useState({
    byId: {},
    allIds: [],
  })

  const [uncheckedIds, setUncheckedIds] = useState([])
  const [checkedIds, setCheckedIds] = useState([])

  const [deletedListItem, setDeletedListItem] = useState({
    title: '',
    isChecked: false,
  })
  const [visibilityUndoButton, setVisibilityUndoButton] = useState('hidden')

  const timer = useRef()

  return {
    list,
    addListItem,
    toggleIsChecked,
    uncheckedIds,
    checkedIds,
    deleteListItem,
    undoDelete,
    visibilityUndoButton,
  }

  function addListItem(title, isChecked = false) {
    const newId = uuid()
    setList({
      byId: {
        ...list.byId,
        [newId]: {
          id: newId,
          title,
          isChecked,
        },
      },
      allIds: [...list.allIds, newId],
    })

    isChecked
      ? setCheckedIds([...checkedIds, newId])
      : setUncheckedIds([...uncheckedIds, newId])
  }

  function undoDelete() {
    addListItem(deletedListItem.title, deletedListItem.isChecked)
    setVisibilityUndoButton('hidden')
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

    if (list.byId[targetId].isChecked) {
      //listItem moves up to unchecked items
      setUncheckedIds([...uncheckedIds, targetId])
      setCheckedIds(checkedIds.filter((id) => id !== targetId))
    } else {
      //listItem moves down to checked items
      setUncheckedIds(uncheckedIds.filter((id) => id !== targetId))
      setCheckedIds([targetId, ...checkedIds])
    }
  }

  function deleteListItem(targetId) {
    const copyOfById = { ...list.byId }
    delete copyOfById[targetId]
    const byIdWithoutTargetId = copyOfById

    setList({
      byId: byIdWithoutTargetId,
      allIds: list.allIds.filter((id) => id !== targetId),
    })
    setUncheckedIds(uncheckedIds.filter((id) => id !== targetId))
    setCheckedIds(checkedIds.filter((id) => id !== targetId))

    const title = list.byId[targetId].title
    const isChecked = list.byId[targetId].isChecked
    setDeletedListItem({ title, isChecked })

    setVisibilityUndoButton('shown')
    resetTimer()
  }

  function resetTimer() {
    timer.current && clearTimeout(timer.current)
    timer.current = setTimeout(
      () => setVisibilityUndoButton('fadeToHide'),
      6000
    )
  }
}
