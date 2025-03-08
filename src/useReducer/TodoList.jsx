import { TodoItems } from "./TodoItems"

export const TodoList = ({ todos = [], onDeleteTodo, onToogleTodo}) => {

  

  return (
    <ul>
        {
            todos.map(todo => (
                <TodoItems key={todo.id} todo={todo} onDeleteTodo={ onDeleteTodo } onToogleTodo={onToogleTodo}/>
                
            ))

        }

    </ul>
  )
}
