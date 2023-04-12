import React from 'react'
import Todo from './Todo'


const TodoList = (props) => {

    let allTodos = props.todos.map((item,index) =>{
            return <Todo id={item.id} todo={item.todo} index={index} deleteTodo={props.deleteTodo}/>
    })

  return (
    <div>
        {allTodos}
    </div>
  )
}

export default TodoList