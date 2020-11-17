import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import InputForm from './01.UI-Elements/InputForm'
import ListItem from './01.UI-Elements/ListItem'

function App() {
  const [list, setList] = useState({
    byId: {
      '65afds4': {
        id: '65afds4',
        titleListItem: 'Milk',
        isCheckmarked: false,
      },
      a84f55d: {
        id: 'a84f55d',
        titleListItem: 'Butter',
        isCheckmarked: true,
      },
    },
    allIds: ['65afds4', 'a84f55d'],
  })

  // const [list, setList] = useState({
  //   byId: {},
  //   allIds: [],
  // })

  return (
    <div className="App">
      <InputForm onCreateListItem={addListItem} />
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
    </div>
  )

  function addListItem(titleListItem) {
    console.log(titleListItem)

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

  /* [
      ...list,
      { titleListItem: titleListItem, isCheckmarked: false, id: uuid() },
    ])
  } */

  /* 
  list = [

    { titleListItem: 1, isCheckmarked: false, id: 65afds4 }
    { titleListItem: 2, isCheckmarked: true, id: a6ew4af }
    { titleListItem: 3, isCheckmarked: false, id: adfsv49 }

  ]
  */

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

  function deleteListItem(id) {
    setList(list.filter((item) => item.id !== id))
  }
}

export default App
