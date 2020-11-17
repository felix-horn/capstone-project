import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import InputForm from './01.UI-Elements/InputForm'
import ListItem from './01.UI-Elements/ListItem'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <InputForm onCreateTodo={addTodo} />
      {todos.map(({ title, isDone, id }, index) => (
        <ListItem
          onCheckboxClick={() => toggleTodo(index, id)}
          onDeleteClick={() => deleteTodo(index)}
          titleListItem={title}
          isCheckmarked={isDone}
          key={id}
        />
      ))}
    </div>
  )

  function addTodo(title) {
    console.log(todos.length)
    setTodos(
      todos
        .filter((todo) => !todo.isDone)
        .concat(
          { title, isDone: false, id: uuid() },
          todos.filter((todo) => todo.isDone)
        )
    )
  }

  function toggleTodo(index, id) {
    const todo = todos[index]

    todo.isDone === true
      ? setTodos([
          ...todos.filter((todo) => !todo.isDone),
          { ...todo, isDone: !todo.isDone },
          ...todos
            .filter((todo) => todo.id !== id)
            .filter((todo) => todo.isDone),
        ])
      : setTodos([
          ...todos.slice(0, index),
          ...todos.slice(index + 1),
          { ...todo, isDone: !todo.isDone },
        ])
  }

  function deleteTodo(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)])
  }
}

export default App
