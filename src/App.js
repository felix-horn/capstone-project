import useList from './hooks/useList'

import List from './02.Components/List'
import InputForm from './01.UI-Elements/InputForm'

export default function App() {
  const {
    list,
    uncheckedIds,
    checkedIds,
    addListItem,
    toggleIsChecked,
    deleteListItem,
  } = useList()
  return (
    <div>
      <List
        list={list}
        listAllocation={uncheckedIds}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={deleteListItem}
      />
      <InputForm addListItem={addListItem} />
      <List
        checked
        list={list}
        listAllocation={checkedIds}
        toggleIsChecked={toggleIsChecked}
        deleteListItem={deleteListItem}
      />
    </div>
  )
}
