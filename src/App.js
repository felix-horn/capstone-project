import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import ListItem from './01.UI-Elements/ListItem'
import InputForm from './01.UI-Elements/InputForm'

export default function App() {
  const [list, setList] = useState({
    byId: {},
    allIds: [],
  })

  return (
    <div>
      {list.allIds.map((id) => {
        const { titleListItem, isCheckmarked } = list.byId[id]
        return (
          <ListItem
            key={id}
            titleListItem={titleListItem}
            isCheckmarked={isCheckmarked}
          />
        )
      })}
      <InputForm addListItem={addListItem} />
    </div>
  )

  function addListItem(titleListItem) {
    const generatedId = uuid()
    setList({
      byId: {
        ...list.byId,
        [generatedId]: {
          id: generatedId,
          titleListItem,
          isCheckmarked: false,
        },
      },
      allIds: [...list.allIds, generatedId],
    })
  }
}
