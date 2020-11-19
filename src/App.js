import useList from './hooks/useList'

import List from './02.Components/List'
import InputForm from './01.UI-Elements/InputForm'

export default function App() {
  const { list, addListItem } = useList()
  return (
    <div>
      {list.allIds.length > 0 && <List list={list} />}
      <InputForm addListItem={addListItem} />
    </div>
  )
}
