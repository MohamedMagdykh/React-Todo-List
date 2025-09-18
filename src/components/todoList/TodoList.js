import React, { useState } from 'react'
import { TodoListHeader } from './TodoListHeader'
import { Todo } from './Todo'

export const TodoList = () => {
  const TodoLocalStorage = localStorage.getItem('todosData') ? JSON.parse(localStorage.getItem('todosData')) : []
  const [Todos , setTodo] = useState(TodoLocalStorage)
  const [filterTodos , setFilterTodos] = useState(Todos)
  const [checkFilter , setCheckFilter] = useState(false)
  const [updateTodo , setEditTodo] = useState({})
  const setLocal = () =>{localStorage.setItem('todosData' , JSON.stringify(Todos))}
  const addNewTodo = (newTodo ) => {
    const updatedTodos = [newTodo , ...Todos ];
     setTodo(updatedTodos)
     handelFilterTodo(updatedTodos , checkFilter)
  }
  const  handelAction = (id,todoAction)=>{
    if(todoAction ==='compelet'){
       setTodo(Todos.map(  t => t.id === id ? {...t , done:!t.done }: t))
       handelFilterTodo(Todos.map(  t => t.id === id ? {...t , done:!t.done }: t) , checkFilter)
    }
    if(todoAction ==='trash'){

      setTodo(Todos.filter(  t => t.id !== id))
      handelFilterTodo(Todos.filter(  t => t.id !== id) , checkFilter)
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
     setTodo(Todos.map(  t => t.id === updatedTodo.id ? updatedTodo : t))
     handelFilterTodo(Todos.map(  t => t.id === updatedTodo.id ? updatedTodo : t) , checkFilter)
  }
  const handelFilterTodo = (updatedTodos , flagFilter) => {
        setCheckFilter(flagFilter)
      if(flagFilter) {
       setFilterTodos(updatedTodos.filter(  t => t.done === false) )
      }
      else{
        setFilterTodos(updatedTodos)
      }
  }
  setLocal()
  return (
    <div className='todolist'>
        <header><h1>Todo List ( {Todos.length} )</h1></header>
        <div className='container'>
           <TodoListHeader newTodo={addNewTodo} editTodo={updateTodo} editedTodo={updatedTodo} filterTodo={(fil)=> handelFilterTodo(Todos ,fil)}  />
         
          <div className="todos-list" >
              {filterTodos.length ? (<div> 
                {filterTodos.map((todo)=>(
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
