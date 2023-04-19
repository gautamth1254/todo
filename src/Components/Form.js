import React from 'react'
import {useState} from 'react'


const Form = (props) => {

    const [input, setInput] = useState('')

    let inputHandler = (e) => {
        // console.log(e.target.value);
        setInput(e.target.value)
    }

    let formHandler = (e) => {
        e.preventDefault(); // dont refresh when form submit   
        let newTodo = {
          id : props.todos.length + 1,
          todo: input
        }
        props.addTodo(newTodo);     
        // console.log(input);
        setInput('')
    }

  return (
    <form onSubmit={formHandler}>
        <input onChange={inputHandler} type='text'  value={input} name="" id=""/>
    </form>
  )
}

export default Form