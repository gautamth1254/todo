import React from 'react'
import {useState} from 'react'


const Form = () => {

    const [input, setInput] = useState('')

    let inputHandler = (e) => {
        // console.log(e.target.value);
        setInput(e.target.value)
    }

    let formHandler = (e) => {
        e.preventDefault();
        console.log(input);
        // setInput('')
    }

  return (
    <form onSubmit={formHandler}>
        <input onChange={inputHandler} type='text' name="" id=""/>
    </form>
  )
}

export default Form