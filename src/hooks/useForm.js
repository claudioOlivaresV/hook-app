import React, { useState } from 'react'

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)

    const onInputChangue = ({target: { value, name }}) => {
        console.log(value, name);
        setFormState({
            ...formState,
            [name]: value,
        })
    }
    const onResetForm = () => {
       
        setFormState(initialForm)
    }

  return {
    formState,
    onInputChangue,
    onResetForm
  }
}
