import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import InputForm from './01.UI-Elements/InputForm'
import ListItem from './01.UI-Elements/ListItem'

function App() {
  const [list, setList] = useState([])

  return (
    <div className="App">
      <InputForm onCreateListItem={addListItem} />
      {list.map(({ titleListItem, isCheckmarked, id }, index) => (
        <ListItem
          onCheckboxClick={() => toggleListItem(index)}
          onDeleteClick={() => deleteListItem(id)}
          titleListItem={titleListItem}
          isCheckmarked={isCheckmarked}
          key={id}
        />
      ))}
    </div>
  )

  function addListItem(titleListItem) {
    setList([
      ...list,
      { titleListItem: titleListItem, isCheckmarked: false, id: uuid() },
    ])
  }

  function toggleListItem(index) {
    // setList(!list[index].isCheckmarked)
    const item = list[index]
    setList([
      ...list.slice(0, index),
      { ...item, isCheckmarked: !item.isCheckmarked },
      ...list.slice(index + 1),
    ])
  }

  function deleteListItem(index) {
    setList([...list.slice(0, index), ...list.slice(index + 1)])
  }
}

export default App
