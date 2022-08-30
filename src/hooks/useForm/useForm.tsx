import React, { useState } from 'react'

interface FormLogin {
  mail: string
  password: string
}
export const useForm = <T extends object>(initialState: T) => {
  const [values, setvalues] = useState<FormLogin>({
    mail: '@',
    password: ''
  })

  const handleInputchange = (event: { target: HTMLInputElement }) => {
    setvalues((vals) => ({
      ...vals,
      [event.target.name]: event.target.value
    }))
  }

  return { values, handleInputchange }
}
