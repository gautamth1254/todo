import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

const TodoApp = () => {

    let dummyArray = [
        {
            id:1,
            todo:'travel'
        },
        {
            id:2,
            todo:'dsa'
        },
        {
            id:3,
            todo:'sleep'
        },
    ]

  return (
    <div>
        <Form/>
        <TodoList todos={dummyArray}/>
    </div>
  )
}

export default TodoApp