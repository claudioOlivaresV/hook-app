import { useEffect, useReducer } from "react"
import { todoReducer } from "../useReducer/todoReducer"


export const useTodos = () => {
    const initialState = []
const init = () => {
    return JSON.parse(localStorage.getItem('todos') || [])
}
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) )
    }, [todos])
    
    const handleNewTodo = (todo) => {
      console.log(todo);
      const action = {
          type: '[TODO] Add Todo',
          payload: todo
      }
      dispatch(action)
      
  
    }
    const handleDeleteTodo = (id) => {
      console.log(id);
      const action = {
          type: '[TODO] Remove Todo',
          payload: id
      }
      dispatch(action)
   }
   const handleToogleTodo = (id) => {
      console.log(id);
      const action = {
          type: '[TODO] Toogle Todo',
          payload: id
      }
      dispatch(action)
   }
   return {
     todos,
     handleNewTodo,
     handleDeleteTodo,
     handleToogleTodo
   }
 
}
