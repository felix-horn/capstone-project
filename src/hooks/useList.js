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
  }
}
