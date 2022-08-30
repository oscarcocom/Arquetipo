import { useForm } from '../../../hooks/useForm/useForm'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import './_login.scss'
import { useState } from 'react'
import './_login.scss'

export const Login = () => {
  const [flagLogin, setflagLogin] = useState(true)
  const { values, handleInputchange } = useForm({})

  return (
    <div className="container">
      {flagLogin ? (
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
            <a onClick={() => setflagLogin(false)} href="#">
              Registrarse aquí
            </a>
            <Button idelement={'StartSesion'} children={'Iniciar Sesión'} size={'small'} />
          </div>
        </div>
      ) : (
        <div className="login">
          <div className="login__header">
            <h3>Registrarse</h3>
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
            <a onClick={() => setflagLogin(true)} href="#">
              Iniciar Sesión
            </a>
            <Button idelement={'StartSesion'} children={'Registrar'} size={'small'} />
          </div>
        </div>
      )}
    </div>
  )
}
