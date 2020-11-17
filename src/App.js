import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import InputForm from './01.UI-Elements/InputForm'
import ListItem from './01.UI-Elements/ListItem'

function App() {
  const [list, setList] = useState({
    byId: {},
    allIds: [],
  })

  return (
    <div className="App">
      {list.allIds.map((id) => {
        const { titleListItem, isCheckmarked } = list.byId[id]
        return (
          <ListItem
            key={id}
            titleListItem={titleListItem}
            isCheckmarked={isCheckmarked}
            onCheckboxClick={() => toggleListItem(id)}
            onDeleteClick={() => deleteListItem(id)}
          />
        )
      })}
      <InputForm onCreateListItem={addListItem} />
    </div>
  )

  function addListItem(titleListItem) {
    const generatedId = uuid()

    setList({
      byId: {
        ...list.byId,
        [generatedId]: {
          id: generatedId,
          titleListItem: titleListItem,
          isCheckmarked: false,
        },
      },
      allIds: [...list.allIds, generatedId],
    })
  }

  function deleteListItem(id) {
    const copyOfById = { ...list.byId }
    delete copyOfById[id]
    const byIdwithoutTargetId = copyOfById

    setList({
      byId: byIdwithoutTargetId,
      allIds: [...list.allIds.filter((listId) => listId !== id)],
    })
  }

  /* 
  list = {

    byId : {
      "65afds4" : {
        id: "65afds4",
        titleListItem : "Milk",
        isCheckmarked: false,
      },
      "a84f55d" : {
        id: "a84f55d",
        titleListItem : "Butter",
        isCheckmarked: true,
      },
    },
    allIds : ["65afds4","a84f55d"] 

  }
  */

  function toggleListItem(id, index) {
    setList(list.map((item) => item.id === id))
    setList((list.id = id.isCheckmarked = !list[id].isCheckmarked))
    // const item = list[index]
    // setList([
    //   ...list.slice(0, index),
    //   { ...item, isCheckmarked: !item.isCheckmarked },
    //   ...list.slice(index + 1),
    // ])

    console.log(list[id].isCheckmarked)

    console.log(
      index,
      list[index],
      list.map((item) => item.titleListItem),
      list.map((_, index) => index)
    )
  }
}

export default App
