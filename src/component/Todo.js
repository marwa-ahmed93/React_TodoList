import React from 'react'

function Todo(props) {
  return (
    <div className='d-flex justify-content-center'>
 <div 
  style={{ textDecoration: props.todo.complete ? "line-through" : "none" }} 
  onClick={props.toggleComplete}
>
  {props.todo.text}
</div> 
    {/* <div style={{textDecoration : props.todo.complete ? "line-through" }} onClick={props.toggleComplete}>
     
      { props.todo.text } 
    </div> */}
    <button className='delete-btn mx-5 mt-1  ' onClick={props.onDelete}>x</button>
  
  </div>
  )
}

export default Todo
