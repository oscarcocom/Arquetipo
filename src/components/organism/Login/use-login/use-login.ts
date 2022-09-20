import { useEffect, useState } from 'react'
import { useForm } from '../../../../hooks/useForm/use-form'
import ApiCangular from '../../../../path/Api/instance-pichincha'
import { createUser } from '../../../../services/user.service'
import { Navigate, useNavigate } from 'react-router-dom'

export const useLogin = <T extends object>(initialState: T) => {
  const [mailError, setMail] = useState<string | null>(null)
  const [passError, setPass] = useState<string | null>(null)
  const { values, handleInputchange, setValues } = useForm(initialState)
  let navigate = useNavigate()

  const handlerMail = (value: string) => {
    if (!value) {
      setMail('Mail not found')
      return
    }
  }
  const handlerPass = (value: string) => {
    if (!value) {
      setPass('passError not found')
      return
    }
  }

  const toLogin = (mail: string, pass: string, setModal: any, setValues: any) => {
    setValues((f: any) => ({
      ...f,
      statusBotton: true
    }))

    ApiCangular.post(`/users/login`, {
      username: mail,
      password: pass
    })
      .then((data: any) => {
        sessionStorage.setItem('token',data.data.access_token); 
        sessionStorage.setItem('user',data.data.user.username); 
        navigate('/');
       
      })
      .catch((error) => {
        navigate('/');
      })
  }

  const toRegiter = (values: any, setModal: any, setValues: any) => {
    setValues((f: any) => ({
      ...f,
      statusBotton: true
    }))
    const categoriesSelected = [
      values.option1,
      values.option2,
      values.option3,
      values.option4,
      values.option5
    ].filter(Boolean)
    console.log(categoriesSelected)
    ApiCangular.post(`/users/`, {
      name: values.name,
      email: values.mail,
      password: values.pass,
      category: categoriesSelected
    })
      .then((data) => {
        console.error(data)
        setValues((f: any) => ({
          ...f,
          statusBotton: false
        }))

        setModal({
          Visible: true,
          Message: 'usuario registrado acontinuacion puede iniciar sesion'
        })
      })
      .catch((error) => {
        setModal({
          Visible: true,
          Message: 'Ocurrio un error'
        })
        console.error(error)
        // setPokePopMessage({
        //   Visible: true,
        //   Message: `Error sucedido ${error}`,
        // });
      })
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
