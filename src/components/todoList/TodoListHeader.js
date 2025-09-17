import { useEffect, useState } from "react"
import FeatherIcon from 'feather-icons-react'
import { v4 as uuidv4 } from "uuid";

export const TodoListHeader = ({newTodo , editTodo , editedTodo , filterTodo } ) => {  
  const [todo , addTodo] = useState(editTodo?.edit ? editTodo.todo.todoText : "")
  const [filter , setFilter] = useState(false)
   useEffect(() => {
    if (editTodo?.edit) {
      addTodo(editTodo.todo.todoText); // set input to the todo being edited
    } else {
      addTodo(""); // clear input when not editing
    }
  }, [editTodo]);
  const handleInput = (todo) =>{

        addTodo(todo)

    
  }
  const submit = () =>{
 
    const todoObj = {
      id:uuidv4(),
      todoText : todo ,
      done: false
    }
    newTodo(todoObj)
    addTodo('')
    

  }
  const updateTodo = () =>{
    const updatedTodo = {
      id:editTodo.todo.id,
      todoText : todo ,
      done: editTodo.todo.done
    }
    editedTodo(updatedTodo)
    addTodo('')
    
  }
  const handelFilter = () => {
    
    setFilter(!filter) 
    filterTodo(!filter)
  }
  return (
    <div className="todos-form ">
        <div className="todos-form_form">
            {editTodo?.edit ? <button className="btn" disabled ={!todo}   onClick={updateTodo}>Edite</button> : <button className="btn" disabled ={!todo}   onClick={submit}>Add</button> }
            
            <input placeholder="Add New Todo ..." value={todo} onChange={(e) => handleInput(e.target.value)}></input>
             <FeatherIcon className={`todos-form_icon ${filter ? "active" : ""}`}  icon={`${filter ? "check-circle" : "circle"}`} onClick={handelFilter} />
        </div>
    </div>

  )
}
