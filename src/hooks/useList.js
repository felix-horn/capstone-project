import { useState } from 'react'
import { v4 as uuid } from 'uuid'

export default function useList() {
  const [list, setList] = useState({
    byId: {},
    allIds: [],
  })

  return {
    list,
    addListItem,
  }

  function addListItem(titleListItem) {
    const generatedId = uuid()
    setList({
      byId: {
        ...list.byId,
        [generatedId]: {
          id: generatedId,
          titleListItem,
          isChecked: false,
        },
      },
      allIds: [...list.allIds, generatedId],
    })
  }
}
