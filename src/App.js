import useList from './hooks/useList'

import List from './02.Components/List'
import InputForm from './01.UI-Elements/InputForm'

export default function App() {
  const { list, addListItem, toggleIsChecked } = useList()
  return (
    <div>
      <List list={list} toggleIsChecked={toggleIsChecked} />
      <InputForm addListItem={addListItem} />
    </div>
  )
}
