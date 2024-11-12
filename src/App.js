import logo from './logo.svg';
import './App.css';

import HomePage from './HomePage';

import { useState } from 'react';
import TodoForm from './component/TodoForm';
import Todo from './component/Todo';

function App() {
// let [todos,stateTodos] = useState([]);

// const addTodo= (todo)=> {
//   stateTodos([todo ,...todos])
// };

// const handleDelete=((id)=>{
//   stateTodos(todos.filter((todo)=>todo.id !== id ))
// })
  return (
    <div className="App mt-5">
{/* <TodoForm onSubmit={addTodo}/>
      {
        todos.map((todo)=>{
        <Todo 
        key={todo.id}
         todo={todo} 
         onDelete={()=> handleDelete(todo.id)}/>
         
        })
      } */}

      <HomePage />
    </div>
  );
}

export default App;
