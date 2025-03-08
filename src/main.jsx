import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HookApp } from './HookApp'
import { CouterApp } from './use-State/CouterApp'
import { CounterCustomeHook } from './use-State/CounterCustomeHook'
import { SimpleForm } from './use-effect/simpleForm'
import { FormWithCustoHook } from './use-effect/FormWithCustomHook'
import { MultipleCustomHook } from './examples/MultipleCustomHook'
// import './useReducer/intro-reducer'
import { TodoApp } from './useReducer/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HookApp /> */}
    {/* <CounterCustomeHook /> */}
    {/* <CouterApp /> */}
    {/* <FormWithCustoHook /> */}
    {/* <MultipleCustomHook /> */}
    <TodoApp/>
    
  </React.StrictMode>,
)
