import { useForm } from '../../../hooks/useForm/useForm'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import './_login.scss'
import { useState } from 'react'
import './_login.scss'

interface FormLogin {
  mail: string
  password: string
}
export const Login = () => {
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

  return (
    <div className="container">
      <div className="login">
        <div className="login__header">
          <h3>Iniciar sesión</h3>
        </div>
        <div className="login__content">
          <Input
            autofocus={true}
            errorHelper={'Correo es requerido'}
            idElement={'Input-user'}
            label={'Correo electronico'}
            min={5}
            placeholder={'Ingresa tu correo'}
            size={'large'}
            state={'normal'}
            value={values.mail}
            nameElement={'mail'}
            eventToChange={handleInputchange}
          />
          <Input
            autofocus={true}
            errorHelper={'Correo es requerido'}
            idElement={'Input-user'}
            label={'Contraseña contraseña'}
            min={5}
            placeholder={'Ingresa tu contraseña'}
            size={'large'}
            state={'normal'}
            value={values.mail}
            nameElement={'mail'}
            eventToChange={handleInputchange}
          />
        </div>

        <div className="login__footer">
          <a href="#">Registrarse aquí</a>
          <Button idelement={'StartSesion'} children={'Iniciar Sesión'} size={'small'} />
        </div>
      </div>
    </div>
  )
}
