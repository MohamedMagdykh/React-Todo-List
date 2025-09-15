import React, { useState } from 'react'
import { TodoListHeader } from './TodoListHeader'
import { Todo } from './Todo'

export const TodoList = () => {
  const [Todos , AddTodo] = useState([])
  const [updateTodo , setEditTodo] = useState({})
  const addNewTodo = (newTodo ) => {
     AddTodo([...Todos , newTodo])
  }
  const  handelAction = (id,todoAction)=>{
    if(todoAction ==='compelet'){
       AddTodo(Todos.map(  t => t.id === id ? {...t , done:!t.done }: t))
    }
    if(todoAction ==='trash'){

      AddTodo(Todos.filter(  t => t.id !== id))
    }
  
     if(todoAction ==='edit'){
       const editTodoData = {
        todo:Todos.find(  t => t.id === id) ,
        edit:true
       }
      setEditTodo(editTodoData)
    }
  }
    const updatedTodo = (updatedTodo ) => {
      setEditTodo({})
     AddTodo(Todos.map(  t => t.id === updatedTodo.id ? updatedTodo : t))
  }
  return (
    <div className='todolist'>
        <header><h1>Todo List ( {Todos.length} )</h1></header>
        <div className='container'>
           <TodoListHeader newTodo={addNewTodo} editTodo={updateTodo} editedTodo={updatedTodo}  />
         
          <div className="todos-list" >
              {Todos.length ? (<div> 
                {Todos.map((todo)=>(
                     <Todo todoData={todo} todoActions={handelAction} key={todo?.id} />
                ))}

            </div>)
            
            : (<h2 className='no-todos'>There are no todos currently..</h2>)


            }  
    
          </div>
        </div>
      
    </div>
  )
}
