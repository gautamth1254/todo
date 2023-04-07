import React from 'react'

const Todo = (props) => {
  return (
    <div>
      <li>index: {props.index} --> id: {props.id} --> task: {props.todo}</li>
    </div>
  )
}

export default Todo