import { useEffect, useState } from 'react'
import { useForm } from '../../../../hooks/useForm/use-form/use-form'

export const useLogin = <T extends object>(initialState: T) => {
  const [mailError, setMail] = useState<string | null>(null)
  const [passError, setPass] = useState<string | null>(null)
  const { values, handleInputchange } = useForm(initialState)

  const handlerMail = (value: string) => {
    if (!value) setMail('Mail not found')
  }
  const handlerPass = (value: string) => {
    if (!value) setPass('passError not found')
  }

  const toLogin = (mail: string, pass: string) => {
    handlerMail(mail)
    handlerPass(pass)
  }

  const toRegiter = (mail: string, pass: string) => {
    handlerMail(mail)
    handlerPass(pass)
  }

  return {
    mailError,
    passError,
    values,
    handleInputchange,
    toLogin,
    toRegiter
  }
}
