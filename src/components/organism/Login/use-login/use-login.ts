import { useEffect, useState } from 'react'
import { useForm } from '../../../../hooks/useForm/use-form'

export const useLogin = <T extends object>(initialState: T) => {
  const [mailError, setMail] = useState<string | null>(null)
  const [passError, setPass] = useState<string | null>(null)
  const { values, handleInputchange,setValues } = useForm(initialState)

  const handlerMail = (value: string) => {
    if (!value) {
      setMail('Mail not found')
       return;
    }
    
  }
  const handlerPass = (value: string) => {
    if (!value) {
      setPass('passError not found')
      return;
    }
  }

  const toLogin = (mail: string, pass: string) => {
    handlerMail(mail)
    handlerPass(pass)
   
     

    //api solved
    //
  }

  const toRegiter = (mail: string, pass: string, number: number, name:string) => {
    handlerMail(mail)
    handlerPass(pass)
    //api solved
    //
  }

  return {
    mailError,
    passError,
    values,
    handleInputchange,
    toLogin,
    toRegiter,
    setValues
  }
}
