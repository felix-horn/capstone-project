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
    //by default listItems are uncheckd and thus belong to this list-allocation-array
    setUncheckedIds([...uncheckedIds, generatedId])
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
}
