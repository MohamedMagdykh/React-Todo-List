import { useEffect, useState } from "react"
import { CheckIcon } from "../../shared/CheckIcon"
import { v4 as uuidv4 } from "uuid";

export const TodoListHeader = ({newTodo , editTodo , editedTodo} ) => {
  console.log(editTodo)
  const [todo , addTodo] = useState(editTodo?.edit ? editTodo.todo.todoText : "")
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
 console.log("updateTodo")
    const updatedTodo = {
      id:editTodo.todo.id,
      todoText : todo ,
      done: editTodo.todo.done
    }
    editedTodo(updatedTodo)
    addTodo('')
    
  }
  return (
    <div className="todos-form ">
        <div className="todos-form_form">
            {editTodo?.edit ? <button className="btn" disabled ={!todo}   onClick={updateTodo}>Edite</button> : <button className="btn" disabled ={!todo}   onClick={submit}>Add</button> }
            
            <input placeholder="Add New Todo ..." value={todo} onChange={(e) => handleInput(e.target.value)}></input>
            <CheckIcon/>
        </div>
    </div>

  )
}
