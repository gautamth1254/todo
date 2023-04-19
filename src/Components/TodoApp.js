import React,{useState} from 'react'
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

    const [todos, setTodos] = useState(dummyArray);

    let addTodo = (todo) => {
        setTodos([...todos, todo]);
    }
    // filter accept callback function
    let deleteTodo = (id) => {
        
        

        let newTodo = todos.filter((todo) =>{
            if(todo.id===id){
                return false
            }
            return true
        })

        setTodos(newTodo);
    }

  return (
    <div>
        
        <Form addTodo={addTodo} todos={todos} ></Form>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default TodoApp