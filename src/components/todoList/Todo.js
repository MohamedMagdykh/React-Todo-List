import FeatherIcon from 'feather-icons-react'

export const Todo = ({todoData , todoActions }) => {


  return (
      <div className={`todos-todo ${todoData.done && 'done'}`} >
      <div className="todos-todo_icon">
        <FeatherIcon  icon={`${todoData.done ? "check-circle" : "circle"}`} onClick={() => todoActions(todoData.id,'compelet')} />
      </div>
      <div className="todos-todo_text"> {todoData.todoText }</div>
        <div className="todos-todo_cta">
          <div className="todos-todo_cta-edit" >
            <FeatherIcon icon="edit" onClick={() => todoActions(todoData.id,'edit')} size="20" />
          </div>
          <div className="todos-todo_cta-delete">
            <FeatherIcon icon="trash-2" onClick={() => todoActions(todoData.id,'trash')} size="20" />
          </div>
        </div>
     
    </div>
  )
}
