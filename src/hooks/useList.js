import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export default function useList() {
  const [list, setList] = useState({
    byId: {},
    allIds: [],
  })

  const [uncheckedIds, setUncheckedIds] = useState([])
  const [checkedIds, setCheckedIds] = useState([])

  return {
    list,
    addListItem,
    toggleIsChecked,
    uncheckedIds,
    checkedIds,
  }

  function addListItem(title) {
    const generatedId = uuid()
    setList({
      byId: {
        ...list.byId,
        [generatedId]: {
          id: generatedId,
          title,
          isChecked: false,
        },
      },
      allIds: [...list.allIds, generatedId],
    })
    setUncheckedIds([...uncheckedIds, generatedId])
  }

  function toggleIsChecked(id) {
    setList({
      byId: {
        ...list.byId,
        [id]: { ...list.byId[id], isChecked: !list.byId[id].isChecked },
      },
      allIds: [...list.allIds],
    })

    setUncheckedIds(
      list.byId[id].isChecked === true
        ? [...uncheckedIds, id]
        : [...uncheckedIds.filter((uncheckedId) => uncheckedId !== id)]
    )

    setCheckedIds(
      list.byId[id].isChecked === true
        ? [...checkedIds.filter((checkedId) => checkedId !== id)]
        : [...checkedIds, id]
    )
  }
}
