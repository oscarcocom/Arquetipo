import React, { useState } from 'react'

export const useForm = <T extends object>(initialState: T) => {
  const [values, setValues] = useState<T>(initialState)

  const reset = () => {
    setValues(initialState)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return { values, handleInputChange, reset }
}
