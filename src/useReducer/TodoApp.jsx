
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks/useTodos"

export const TodoApp = () => {

    
 const  {todos, handleNewTodo, handleDeleteTodo, handleToogleTodo }  = useTodos()
  

  return (
    <>
      <h1>TodoApp ({todos.length})- pendientes (2)</h1>
      <hr/>
      <div className="row">
        <div className="col-7">
            <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}  onToogleTodo={handleToogleTodo}/>

        </div>
        <div className="col-5">
            <h4>Agegar tarea</h4>
            <TodoAdd onNewTodo={handleNewTodo}/>
        </div>

      </div>
      
    </>

  )
}
