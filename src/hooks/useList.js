import { useState } from 'react'
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
  const [isShownUndoButton, setIsShownUndoButton] = useState(false)

  return {
    list,
    addListItem,
    toggleIsChecked,
    uncheckedIds,
    checkedIds,
    deleteListItem,
    undoDelete,
    isShownUndoButton,
  }

  function addListItem(title, isChecked = false) {
    const generatedId = uuid()
    setList({
      byId: {
        ...list.byId,
        [generatedId]: {
          id: generatedId,
          title,
          isChecked,
        },
      },
      allIds: [...list.allIds, generatedId],
    })

    isChecked
      ? setCheckedIds([...checkedIds, generatedId])
      : setUncheckedIds([...uncheckedIds, generatedId])
  }

  function undoDelete() {
    addListItem(deletedListItem.title, deletedListItem.isChecked)
    setIsShownUndoButton(false)
  }

  function toggleIsChecked(targetId) {
    //boolean "isChecked" is toggled in the corresponding byId-object
    //allIds-object stays untouched / list-allocation is dependent on un/checkedIds-array (s.b.)
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
      setCheckedIds([...checkedIds.filter((id) => id !== targetId)])
    } else {
      //listItem moves down to checked items
      setUncheckedIds([...uncheckedIds.filter((id) => id !== targetId)])
      setCheckedIds([targetId, ...checkedIds])
    }
  }

  function deleteListItem(targetId) {
    const copyOfById = { ...list.byId }
    delete copyOfById[targetId]
    const byIdWithoutTargetId = copyOfById

    setList({
      byId: byIdWithoutTargetId,
      allIds: [...list.allIds.filter((id) => id !== targetId)],
    })
    setUncheckedIds([...uncheckedIds.filter((id) => id !== targetId)])
    setCheckedIds([...checkedIds.filter((id) => id !== targetId)])

    const title = list.byId[targetId].title
    const isChecked = list.byId[targetId].isChecked
    console.log({ title, isChecked })
    setDeletedListItem({ title, isChecked })

    setIsShownUndoButton(true)
  }
}
