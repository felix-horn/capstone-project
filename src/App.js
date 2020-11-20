import useList from './hooks/useList'

import List from './02.Components/List'
import InputForm from './01.UI-Elements/InputForm'

export default function App() {
  const {
    list,
    addListItem,
    toggleIsChecked,
    uncheckedIds,
    checkedIds,
  } = useList()
  return (
    <div>
      <List
        list={list}
        checkState={uncheckedIds}
        toggleIsChecked={toggleIsChecked}
      />
      <InputForm addListItem={addListItem} />
      <List
        list={list}
        checkState={checkedIds}
        toggleIsChecked={toggleIsChecked}
      />
    </div>
  )
}
