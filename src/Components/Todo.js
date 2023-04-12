import React from 'react'
import { BsFillTrash3Fill } from 'react-icons/bs';



const Todo = (props) => {

  let HandleDelete =(id)=> {
    props.deleteTodo(id);
  } 


  return (
    <div>
      <li>index: {props.index} --: id: {props.id} --: task: {props.todo} <span onClick={()=> HandleDelete(props.id)}> <BsFillTrash3Fill/> </span>  </li> 
      {/* // khudse kuch send krna ho toh like change krna ho toh onclick me function dalenge // agar arrow function k andar single argument pass krna ho toh return keyword hta sakta hu */}
    </div>
  )
}

export default Todo