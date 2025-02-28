import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'claudio',
        email: 'claudio@asd.cl'

    })
    const { username, email} = formState
    const onInputChangue = ({target: { value, name }}) => {
        console.log(value, name);
        setFormState({
            ...formState,
            [name]: value,
        })
    }

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

    
  return (
    <>
      <h1>Formulario simple</h1>
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
      {
        (username === 'ca') && <Message/>
      }
      
    </>
  )
}
