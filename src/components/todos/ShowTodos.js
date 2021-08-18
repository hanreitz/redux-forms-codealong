import React from 'react'

export default function ShowTodos(props) {
  const showList = props.todoList.map(todo => (<li>{todo}</li>))
  return (
    <div>
      <ul>
        { showList }
      </ul>
    </div>
  )
}
