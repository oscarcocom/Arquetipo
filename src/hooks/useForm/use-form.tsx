import { useState } from 'react'

export const useForm = <T extends object>(initialState: T) => {
  const [values, setValues] = useState(initialState);

  const handleInputchange = (event: { target: HTMLInputElement }) => {
    setValues((vals) => ({
      ...vals,
      [event.target.name]: event.target.value
    }))
  }
  const reset = () => {
    setValues((vals) => ({
      ...initialState
    }))
  }
  return { values,setValues, handleInputchange, reset }
}
