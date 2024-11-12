import React, { useState } from 'react'
import TodoForm from './component/TodoForm';
import Todo from './component/Todo';
function HomePage() {

  let [todos,stateTodos] = useState([]);
  const [todoToShow, stateTodoToShow] = useState("all");
  const[toggleAllComplete , setToggleAllComplete] = useState(true)
const addTodo= (todo)=> {
  stateTodos([todo ,...todos])
};
const removeAllTodosComplete= ()=>{
  stateTodos(todos.filter((todo)=> !todo.complete))
}
const handleDelete=((id)=>{
  stateTodos(todos.filter((todo)=>todo.id !== id ))
})

const updateTodoToShow=((s)=> {
  stateTodoToShow(s)
})

const toggleComplete = ((id)=>{
  stateTodos(
    todos.map((todo)=> {
    if(todo.id === id){
      return{
        ...todo,
        complete: !todo.complete
      };
     
    } else{
      return todo;
    }
  }

  ))
})
if(todoToShow === "active"){
  todos = todos.filter((todo)=> !todo.complete)
}
else if(todoToShow === "complete"){
  todos = todos.filter((todo)=> todo.complete)

}
 
  return (
    <div>

<TodoForm  onSubmit={addTodo}/>

    {todos.map((todo) => {
  return (
    <Todo
      key={todo.id}
      todo={todo}
      onDelete={() => handleDelete(todo.id)}
      toggleComplete={()=>toggleComplete(todo.id)}
    />
  );
})}
     
      
<div>
  <button className='btn btn-dark mx-2' onClick={()=>updateTodoToShow("all")}>All</button>
  <button className='btn btn-dark mx-2' onClick={()=>updateTodoToShow("active")}>Active</button>
  <button className='btn btn-dark mx-2' onClick={()=>updateTodoToShow("complete")}>Complete</button>
</div>

{todos.some((todo)=>todo.complete ) ? ( <button onClick={removeAllTodosComplete} className='btn btn-dark mx-2 my-3'>Remove all complete todos</button>
) :null}

 <button onClick={()=>{
  stateTodos(
    todos.map((todo)=> ({
      ...todo , 
      complete: toggleAllComplete,
    }))
    
  );
  setToggleAllComplete(!toggleAllComplete)
 }} className='btn btn-dark mx-2 my-3'>Toggle all complete : {`${toggleAllComplete}`}</button>

    </div>
  )
}

export default HomePage
