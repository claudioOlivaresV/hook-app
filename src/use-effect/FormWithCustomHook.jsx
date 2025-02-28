import { useEffect, useState } from "react"
import { Message } from "./Message"
import { useForm } from "../hooks/useForm"

export const FormWithCustoHook = () => {

  const {formState, onInputChangue, onResetForm} = useForm({
    username: '',
    email: '',
    password: ''

  })

  const { username, email, password} = formState;
  

    //efectos secundarios
    useEffect(() => {
        // console.log('use effect');
    }, [])

    useEffect(() => {
        // console.log('use effect para email');
    }, [formState])

    useEffect(() => {
        // console.log('use effect para email');
    }, [email])
  const reset = () => {
    useForm()
  }
    
  return (
    <>
      <h1>Formulario con custom hook</h1>
      <hr/>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChangue}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="correo@correo.cl"
        name="email"
        value={email}
        onChange={onInputChangue}
      />
       <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChangue}
      />
      {
        (username === 'ca') && <Message/>
      }
      <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
      
    </>
  )
}
